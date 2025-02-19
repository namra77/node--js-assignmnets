import express from 'express'
import mongoose from 'mongoose';

const app = express();
const PORT = 3005;


	// we'll add code here soon

  /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */



  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =  "mongodb+srv://namramahmood7:bFbjm2ljaQhSP7jI@cluster0.xyqdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  
  // Define a schema
  const userSchema = new mongoose.Schema({
      name: String,
      age: Number
  });
  
  // Create a model
  const User = mongoose.model('User', userSchema);
  
  async function main() {
      try {
          await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
          // Create
          const newUser = new User({ name: 'Misbah', age: 25 });
          const savedUser = await newUser.save();
          console.log('Inserted user:', savedUser);
  
          // Read
          const foundUser = await User.findOne({ name: 'Misbah' });
          console.log('Found user:', foundUser);
  
          // Update
          const updateResult = await User.updateOne({ name: 'Misbah' }, { $set: { age: 26 } });
          console.log('Updated user count:', updateResult.nModified);
  
          // Delete
          const deleteResult = await User.deleteOne({ name: 'Misbah' });
          console.log('Deleted user count:', deleteResult.deletedCount);
      } catch (error) {
          console.error('Error:', error);
      } finally {
          await mongoose.disconnect();
      }
  }

  
  main().catch(console.error);




app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});



