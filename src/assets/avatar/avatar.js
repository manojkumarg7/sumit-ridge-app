import axios from "axios";
import user1 from "./arun.jpg";
import user2 from "./raj.jpg";
import user3 from "./manoj.jpg";
import user4 from "./charan.jpg";

export const users = {
  user1,
  user2,
  user3,
  user4,
};

const fetchUser = async () => {
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

const updateUserAvatars = async () => {
  try {
    const usersData = await fetchUser();

    console.log("Fetched users data:", usersData);

    const images = Object.values(users);

    for (let i = 0; i < usersData.length; i++) {
      const updatedUser = {
        avatar: images[i] || usersData[i].avatar,
      };

      await axios.patch(
        `https://672dd775fd8979715643e967.mockapi.io/usertable/${usersData[i].id}`,
        updatedUser
      );

      console.log(`Updated user ${usersData[i].id} with avatar:`, updatedUser);
    }

    console.log("Avatar update complete for all users.");
  } catch (error) {
    console.error("Error updating avatars:", error);
  }
};

updateUserAvatars();

console.log("Image paths:");
Object.values(users).forEach((image) => {
  console.log(image);
});
