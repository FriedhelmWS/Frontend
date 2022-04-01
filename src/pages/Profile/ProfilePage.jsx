import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { useSearchItem } from "../../hooks/useSearchItem";
import { Container, Modal, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PostPreviewComponent from "../../components/postPreviewComponent";
import { searchItem } from "../../util/searchUtil";
import ProfileSection from "./profileSection";
import ChangeModal from "./ChangeModal";
const posts = [
  {
    title: "yes",
    community: "Softeng701",
    upi: "abcd123",
    time: "12:12",
    postID: "randomID1",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "no",
    community: "Softeng751",
    upi: "shfdj364",
    time: "12:12",
    postID: "randomID2",
    text: "High performance computing seems pretty interesting, but also difficult to learn. Also how do you even pronounce parallelisation",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "hi",
    community: "Compsys701",
    upi: "das8089",
    time: "12:12",
    postID: "randomID3",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "title4",
    community: "Softeng701",
    upi: "sass2364",
    time: "12:12",
    postID: "randomID4",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
];

// change to api call
const getProfileDetails = () => {
  return {
    username: "catcat",
    name: "Cat Cat",
    image: "base64",
  };
};
const { username: username, name: name, image: image } = getProfileDetails();

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { filteredResults, searchQuery, setSearchQuery } = useSearchItem(posts);

  //handle change password/email modal opening
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 md:flex-row">
        <ProfileSection
          setOpen={setOpen}
          username={username}
          name={name}
          image={image}
        />
        <div>
          <main className="flex flex-col h-full">
            <Container fixed>
              <ChangeModal open={open} handleClose={() => setOpen(false)} />
              <Box className="p-toprow" style={{ marginBottom: "20px" }}>
                <h1 className="p-title">Post Search</h1>
              </Box>
              <Box className="p-search">
                <FormControl className="p-searchbar" variant="filled">
                  <InputLabel htmlFor="search">Search Posts</InputLabel>
                  <OutlinedInput
                    id="search"
                    endAdornment={
                      <InputAdornment position="end">
                        <Search />
                      </InputAdornment>
                    }
                    //when user inputs something into the search bar this calls the searchItem function to filter out the posts
                    //based on the input
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="p-toprow">
                <h1 className="p-title">Post History</h1>
              </Box>
              {searchQuery.length > 0 && (
                <p className="font-bold">
                  {filteredResults.length} results found based on search query "
                  {searchQuery}"
                </p>
              )}
              {filteredResults &&
                filteredResults.map((post) => (
                  <Box className="p-post">
                    <PostPreviewComponent post={post} />
                  </Box>
                ))}
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
