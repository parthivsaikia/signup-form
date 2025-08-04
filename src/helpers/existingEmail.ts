import axios from "axios";
export default async function existingEmail(value: string) {
  const response = await axios.get(
    `http://localhost:3000/users?emailId=${value}`,
  );
  return response.data.length !== 0;
}
