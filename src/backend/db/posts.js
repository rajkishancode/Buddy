import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "fa2a5e1e870c121",
    content:
      "It aint what you dont know that gets you into trouble. Its what you know for sure that just aint so. - Mark Twain",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "kishan",
    username: "rajkishan",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },

  {
    _id: "fa2a5e1e870c111-a2d",
    content:
      "Nothing is particularly hard if you divide it into small jobs - Henry Ford",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c112-a22d",
    content:
      "If you’re blaming the people from your past, then you’re implicitly criticizing who you are today.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: "2023-06-14T16:43:34+05:30",
    updatedAt: "2023-06-14T16:43:34+05:30",
  },

  {
    _id: "4670-acf8-6b4892ec621e21",
    content: "Technology destroys jobs and replaces them with opportunities.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "dan-abramov-userId",
          username: "dan_abramov",
          firstName: "Dan",
          lastName: "Abramov",
          likeUpdateDate: "2023-06-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment:
          "When we loose something, there are higher chances of getting something more better than it !",
        commentDate: "2023-06-12T19:05:28+05:30",
        firstName: "Tim",
        lastName: "Ferriss",
        username: "thetimferris",
        _id: "2ae6268b-dd1b-447a-121-23sq2",
        profileImage: {
          url: "https://i.postimg.cc/R0prcrcC/Sfuca-Jh8-400x400.jpg",
          original_filename: "tim-ferris-profile",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan-profile",
    },
    postMedia: null,
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },

  {
    _id: "4d62-aa68-24c201367a3541",
    content:
      "Reading some Redux example code I wrote four years ago and I have no effing idea whats going on there",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "4d62-aa68-24c201367a354-11xzzyj1o",
    content:
      "what is currying ? imagine functions only take one argument. how would we pass many? one way is to pass an object: ({ a, b, c }) => … but we could also turn our function into a matryoshka of many functions where each takes one arg: (a) => (b) => (c) => … that’s currying. not very useful in js.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4d62-aa68-24c201367a354-12-jowq1y",
    content: "I’m going to the stars and then past them.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postMedia: {
      url: "https://i.postimg.cc/bwDgM8HD/image.jpg",
      original_filename: "virat-post-image",
    },
    comments: [],
    profileImage: {
      url: "https://i.postimg.cc/SRPyZF6G/EPSUNy-R3-400x400.jpg",
      original_filename: "imVkohli-profile",
    },
    userId: "virat-kohli-userId",
    firstName: "Virat",
    lastName: "Kohli",
    username: "imVkohli",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },

  {
    _id: "4302618b-3cdd15",
    content: "Checkout my ecommerce app.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "great work.",
        commentDate: formatDate(),
        firstName: "Naval",
        lastName: "Ravikant",
        username: "naval",
        _id: "2ae6268b-dd1b-447a-121-23vc2",
        profileImage: {
          url: "https://i.postimg.cc/GpDLhm0w/image.jpg",
          original_filename: "naval-profile",
        },
      },
      {
        comment: "Good job",
        commentDate: formatDate(),
        firstName: "Tim",
        lastName: "Ferriss",
        username: "thetimferris",
        _id: "2ae6268b-dd1b-447a1-23sq2",
        profileImage: {
          url: "https://i.postimg.cc/R0prcrcC/Sfuca-Jh8-400x400.jpg",
          original_filename: "tim-ferris-profile",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan-profile",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    postMedia: {
      url: "https://i.postimg.cc/7hmLkF4j/Screenshot-2023-07-08-050158.png",
      original_filename: "project-showcase",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "414d-9208-cb8d79b928bf16",
    content:
      "If I had to condense my talk into a single frame, it would be this one. Hooks let you define your own abstractions (like useWindowWidth in this example) that 'feel' as natural to use as React's built-in features.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: {
      url: "https://i.postimg.cc/x1T6nhDY/2299e975abe5863dc35e78e6bd67aa3f.jpg",
      original_filename: "test-image",
    },
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
  {
    _id: "b1c2091e-265b17",
    content:
      "Desire is a contract that you make with yourself to be unhappy until you get what you want.✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "Well said.",
        commentDate: "2023-06-10T19:05:28+05:30",
        firstName: "Virat",
        lastName: "Kohli",
        username: "imVkohli",
        _id: "2ae6268b-dd1b-447a-121-23vc342",
        profileImage: {
          url: "https://i.postimg.cc/SRPyZF6G/EPSUNy-R3-400x400.jpg",
          original_filename: "imVkohli-profile",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    postMedia: null,
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
  {
    _id: "48bc-9b0a-3c66d5634ad418",
    content: "This beauty ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "So mesmerizing",
        commentDate: "2023-06-15T19:05:28+05:30",
        firstName: "Virat",
        lastName: "Kohli",
        username: "imVkohli",
        _id: "2ae6268b-dd1b-447a-121-23vc342",
        profileImage: {
          url: "https://i.postimg.cc/SRPyZF6G/EPSUNy-R3-400x400.jpg",
          original_filename: "imVkohli-profile",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    postMedia: {
      url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      original_filename: "scenery",
    },
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },

  {
    _id: "a572a19c-68de11",
    content:
      "The bad news is time flies. The good news is you're the pilot.— Michael Altshuler",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Nice quote.",
        commentDate: "2023-06-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: "2ae6268b-dd1b-447a-1sqa21",
        profileImage: {
          url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
          original_filename: "dan-abramov",
        },
      },
      {
        comment: "Good one.",
        commentDate: "2023-06-28T19:05:28+05:30",
        firstName: "Tim",
        lastName: "Ferriss",
        username: "thetimferris",
        _id: "2ae6268b-dd1b-447a-121-232",
        profileImage: {
          url: "https://i.postimg.cc/R0prcrcC/Sfuca-Jh8-400x400.jpg",
          original_filename: "tim-ferris-profile",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan-profile",
    },
    postMedia: null,
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },

  {
    _id: "f8add63b-9e2819",
    content: `Here's to another year of sixes, unforgettable helicopter shots, and breathtaking wicketkeeping skills. 🚁🔥 Thank you for the memories you've given us and for being an inspiration to aspiring cricketers around the globe.

#HappyBirthdayDhoni #MSDhoni #CaptainCool 🚀`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "virat-kohli-userId",
          firstName: "Virat",
          lastName: "Kohli",
          username: "imVkohli",
          likeUpdateDate: "2023-06-15T16:30:17+05:30",
        },
        {
          _id: "dan-abramov-userId",
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "This is awesome.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: "2ae6268b-dd1b-447a-121",
        profileImage: {
          url: "https://i.postimg.cc/J4Td6fT9/rqkw-PVi-A-400x400.jpg",
          original_filename: "dan-abramov",
        },
      },
    ],
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    postMedia: {
      url: "https://i.postimg.cc/Vvgb1sP9/ms-dhoni-1600-final-ipl-16530530983x2.jpg",
      original_filename: "dhoni-book",
    },
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
  {
    _id: "404a-9029110",
    content:
      "Leadership is not about being in charge. It is about taking care of those in your charge. - Simon Sinek",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://i.postimg.cc/GpDLhm0w/image.jpg",
      original_filename: "naval-profile",
    },
    postMedia: null,
    userId: "naval-ravikant-userId",
    firstName: "Naval",
    lastName: "Ravikant",
    username: "naval",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
  {
    _id: "4d62-aa68-24c201367a354-12-c2ono1",
    content: "12 years in test cricket today. Forever grateful 💫🙇🏻♂️",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://i.postimg.cc/SRPyZF6G/EPSUNy-R3-400x400.jpg",
      original_filename: "imVkohli-profile",
    },
    postMedia: {
      url: "https://i.postimg.cc/wT0RtByn/image.jpg",
      original_filename: "virat-post-image",
    },
    comments: [],
    userId: "virat-kohli-userId",
    firstName: "Virat",
    lastName: "Kohli",
    username: "imVkohli",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c110-ad2",
    content:
      "Peace is happiness at rest, and happiness is peace in motion. You can convert peace to happiness any time you want, but peace is want you want most of the time…If you are a peaceful person, anything you do will be a happy activity.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://i.postimg.cc/GpDLhm0w/image.jpg",
      original_filename: "naval-profile",
    },
    userId: "naval-ravikant-userId",
    firstName: "Naval",
    lastName: "Ravikant",
    username: "naval",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c113-a4d",
    content:
      " DESIRE—Pick one desire, and one desire only. The universe will help you get it. Let go of everything else.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rajkishan",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
  {
    _id: "b09f0083-85c543",
    content:
      "Leadership is not about titles,positions or flowcharts it is about one life influencing another.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "dan-abramov-userId",
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2023-06-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    postMedia: {
      url: "https://plus.unsplash.com/premium_photo-1661963885635-2b428cedce28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      original_filename: "raj-post-test-image",
    },
    profileImage: {
      url: "https://pbs.twimg.com/profile_images/1628770889033715713/UqHHu52c_400x400.jpg",
      original_filename: "rajkishan-profile",
    },
    userId: "raj-kishan-test-userId",
    firstName: "Raj",
    lastName: "Kishan",
    username: "rajkishan",
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: "2023-06-15T16:43:34+05:30",
  },
];
