import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {decode, sign, verify} from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables : {
        userId: string;
    }
}>();

//Middleware logic goes here
blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('Authorization') || "";
    const user = await verify(authHeader,c.env.JWT_SECRET)
    if(user) {
        //@ts-ignore
        c.set("userId",user.id)
        next();
    }
    else {
        c.status(403)
        return c.json({
            message: "not logged in"
        })
    }
    next();
});

blogRouter.post('/' , async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const authorId = c.get("userId")
      const body= await c.req.json();
      const blog = await prisma.blog.create({
        data:{
          title: body.title,
          content: body.content,
          authorId: parseInt(authorId)
        }
      })
      return c.json({
        id: blog.id
      })
  })
  blogRouter.put('/' , async (c)=> {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const body= await c.req.json();
      const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data:{
          title: body.title,
          content: body.content,
        }
      })
      return c.json({
        id: blog.id
      })
  })
  blogRouter.get('/' ,async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const body= await c.req.json();
      try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: body.id
            }
          })
      }
      catch(e) {
        return c.json({
            message: "error occur while fetching blog post"
          })
      }
      
  })

  //todo: Add pagination here
  blogRouter.get('/bulk' , async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const blog = await prisma.blog.findMany();
      return c.json({
        blog
      })
  })