import axios from "axios";
import { users } from "../../assets/avatar/avatar";

export const fetchUser = async () => {
  try {
    const response = await axios.get(
      "https://672dd775fd8979715643e967.mockapi.io/usertable"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

export const updateAvatars = async () => {
  try {
    const userData = await fetchUser();
    console.log("Fetched user data:", userData);

    const images = Object.values(users);
    console.log("Image paths:", images);

    const updateData = userData.map((user, index) => {
      const updatedUser = {
        ...user,
        avatar: images[index] || user.avatar,
      };

      console.log(`Updated user ${index + 1}:`, updatedUser);
      return updatedUser;
    });

    console.log("Updated users data:", updateData);
  } catch (error) {
    console.error("Error updating avatars:", error);
  }
};
