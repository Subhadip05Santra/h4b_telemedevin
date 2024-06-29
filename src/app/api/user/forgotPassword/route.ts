// // app/api/user/forgotpassword.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { auth } from '@/firebase';
// import { sendPasswordResetEmail } from 'firebase/auth';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     try {
//       await sendPasswordResetEmail(auth, email);
//       res.status(200).json({ message: 'Password reset email sent successfully' });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(Method ${req.method} Not Allowed);
//   }
// };

// export default handler;