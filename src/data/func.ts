import { createClient } from "./supabase/client";

const supabase = createClient();

const storeUser = async (userData: any) => {
  const {
    id,
    email,
    user_metadata: { name, avatar_url },
  } = userData;

  const { data, error } = await supabase
    .from("users")
    .upsert({ id: id, name: name, email: email, image: avatar_url });
  if (error) {
    console.error("Error inserting or updating user data:", error);
  } else {
    console.log("User data upserted successfully");
  }
};

const postMsg = async (
  user_image: string,
  user_email: string,
  user_name: string,
  msg: string,
) => {
  const { data, error } = await supabase
    .from("messages")
    .upsert({
      user_image: user_image,
      user_email: user_email,
      user_name: user_name,
      msg: msg,
    });
  if (error) {
    console.error("Error inserting or updating msg data:", error);
    return error;
  } else {
    console.log("Message data upserted successfully");
    return true;
  }
};

const deleteMsg = async (id: number) => {
  const { error } = await supabase.from("messages").delete().eq("id", id);
  if (error) {
    console.error("Error deleting message:", error);
    return error;
  } else {
    console.log("Message deleted successfully");
    return true;
  }
};

export { storeUser, postMsg, deleteMsg };
