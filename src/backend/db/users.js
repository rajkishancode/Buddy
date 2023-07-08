import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    password: "rajkishan@123",
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://github.com/rajkishancode",
    bio: "👋🏻Hey, I am a passionate frontend developer.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    password: "danabramov@123",
    profileImage: {
      url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
      original_filename: "dan-abramov",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://overreacted.io/",
    bio: "the results are always perfect.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "tim-ferris-test-userId",
    firstName: "Tim",
    lastName: "Ferriss",
    username: "thetimferris",
    password: "timferris@123",
    profileBackgroundUrl: "",
    websiteUrl: "https://tim.blog/",
    bio: "American entrepreneur, investor, author, podcaster, and lifestyle guru",
    profileImage: {
      url: "https://i.postimg.cc/R0prcrcC/Sfuca-Jh8-400x400.jpg",
      original_filename: "tim-ferris-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "naval-ravikant-userId",
    firstName: "Naval",
    lastName: "Ravikant",
    username: "naval",
    password: "naval@123",
    profileImage: {
      url: "https://i.postimg.cc/GpDLhm0w/image.jpg",
      original_filename: "naval-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://nav.al/",
    bio: "Indian-American entrepreneur and investor",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "virat-kohli-userId",
    firstName: "Virat",
    lastName: "Kohli",
    username: "imVkohli",
    password: "imVkohli@123",
    profileImage: {
      url: "https://i.postimg.cc/SRPyZF6G/EPSUNy-R3-400x400.jpg",
      original_filename: "imVkohli-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://en.wikipedia.org/wiki/Virat_Kohli",
    bio: "Indian international cricketer and former captain of the India national cricket team.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
