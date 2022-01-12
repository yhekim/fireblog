import { auth } from "./firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  query,
  remove,
  child,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { successNote } from "./toastNotify";

export const addInfo = (info) => {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const db = getDatabase();
  const userRef = ref(db, "fireblog");
  const newLanguageRef = push(userRef);
  set(newLanguageRef, {
    title: info.title,
    image: info.image,
    overlay: info.overlay,
    month: month[date.getMonth()],
    day: date.getDate(),
    year: date.getFullYear(),
    mail: auth.currentUser ? auth.currentUser.email : "",
  });
  successNote("Added successfully");
};
export const useFetch = () => {
  const [languageList, setLanguageList] = useState();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "fireblog");

    onValue(query(userRef), (snapshot) => {
      const languages = snapshot.val();
      // send an array of the values in database
      const languageArray = [];
      for (let id in languages) {
        languageArray.push({ id, ...languages[id] });
      }
      setLanguageList(languageArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, languageList };
};

export const deleteInfo = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'contact');
  remove(ref(db, "fireblog/" + id));
  successNote("Deleted");
};

export const updateInfo = (info) => {
  const db = getDatabase();

  const updates = {};
  updates["fireblog/" + info.id] = info;

  return update(ref(db), updates);
};
