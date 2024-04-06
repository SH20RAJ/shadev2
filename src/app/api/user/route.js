const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import {NextResponse} from 'next/server'

export async function GET(){
    async function createUser() {
        var msg = "Hii";
        try {
          const newUser = await prisma.user.create({
            data: {
              username: 'eefwe',
              email: 'ewfewfwe@examwple.com',
              password: 'pasesword123',
              name: 'New Ueser',
            },
          });
          console.log('Created new user:', newUser);
           msg = "user created successfully"
          
        } catch (error) {
          console.error('Error creating user:', error);
           msg = "user not created"

        } finally {
          await prisma.$disconnect();
        }
        return msg;
      }
      
      

      return NextResponse.json({
        message: await createUser()
      });
}
