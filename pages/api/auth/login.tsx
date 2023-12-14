// pages/api/auth/login.js
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { FakeDbSingleton } from '../../../lib/fakeDb';

const SECRET_KEY = 'your-secret-key'; // Replace with a strong secret key
const EXPIRATION_TIME = '1h';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Your authentication logic here (validate username and password)


  const body = req.body;

  // Access the POST parameters
  const { username, password } = body;

  var find= FakeDbSingleton.getInstance().findUser(username,password);

  if(find != null){


    const user = find;

    const token = jwt.sign(user, SECRET_KEY, {
      expiresIn: EXPIRATION_TIME,
    });
  
    res.status(200).json({ success: true, token });

  }
else{
      res.status(404).json({ success: false, message: 'not found' });

}
 
};
