// // app/api/(user)/sign-up/route.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { auth, db } from '@/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { collection, addDoc } from 'firebase/firestore';
// import signUpFormSchema from '@/model/schema/signup.schema';


// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const formData = signUpFormSchema.parse(req.body);
//       const { emailAddress, password, username } = formData;

//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, emailAddress, password);
//       const user = userCredential.user;

//       // Add user to Firestore
//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         email: user.email,
//         username,
//       });

//       res.status(201).json({ message: 'User created successfully', uid: user.uid });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(Method ${req.method} Not Allowed);
//   }
// };

// export default handler;