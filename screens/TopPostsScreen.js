import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listAllPosts } from "../redux/actions/postActions";
import { getEveryPostData } from "../redux/selectors";
import Posts from "../components/Posts";
import Loading from "../components/Loading";
import Error from "../components/Error";

const TopPostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAllPosts(100));
  }, [dispatch]);

  const { loading: postsLoading, error: postsError } = useSelector(
    (state) => state.getPosts
  );
  const posts = useSelector(getEveryPostData);
  console.log(posts);

  const renderItem = ({ item }) => <Posts item={item} />;

  return (
    <View>
      {postsLoading ? (
        <Loading />
      ) : postsError ? (
        <Error>{postsError}</Error>
      ) : (
        <View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            initialNumToRender={20}
          />
        </View>
      )}
    </View>
  );
};

export default TopPostsScreen;
