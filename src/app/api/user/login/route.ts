// // app/api/user/login.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { auth } from '@/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       res.status(200).json({ message: 'Login successful', uid: user.uid });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(Method ${req.method} Not Allowed);
//   }
// };

// export default handler;