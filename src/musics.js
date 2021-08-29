const songs = [
  {
    id: 1,
    title: "Baghalam kon",
    singer: "Amin Habibi",
    src: "https://dl.naslemusic.com/music/1395/03/Amin%20Habibi%20-%20Baghalam%20Kon.mp3",
    img: "https://ahaang.com/wp-content/uploads/2015/12/amin-habibi.jpg",
  },
  {
    id: 2,
    title: "Khoshbakhtit arezome",
    singer: "Siamak abbasi",
    img: "https://upmusics.com/wp-content/uploads/2017/10/1-1.jpg",
    src: "https://irsv.upmusics.com/Downloads/Musics/Siamak%20Abbasi%20-%20Khoshbakhtit%20Arezoome%20(320).mp3?_ga=2.230491164.1808244596.1630225203-536456928.1629913724",
  },
  {
    id: 3,
    title: "Behet ghol midam",
    singer: "Mohsen yegane",
    img: "https://upmusics.com/wp-content/uploads/2017/08/photo_2017-08-30_19-39-52.jpg",
    src: "https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(320).mp3?_ga=2.167600318.1808244596.1630225203-536456928.1629913724",
  },
  {
    id: 4,
    title: "Be hamin zoodi",
    singer: "Sirvan Khosravi",
    img: "https://upmusics.com/wp-content/uploads/2018/06/vbn.jpg",
    src: "https://irsv.upmusics.com/Tracks/Songs/Sirvan%20Khosravi%20%E2%80%93%20Be%20Hamin%20Zoodi%20(UpMusic).mp3?_ga=2.202205585.1808244596.1630225203-536456928.1629913724",
  },
  {
    id: 5,
    title: "Tanha",
    singer: "Amin Habibi",
    img: "https://upmusics.com/wp-content/uploads/2018/11/hjk.jpg",
    src: "https://irsv.upmusics.com/Downloads/Musics/Amin%20Habibi%20%7C%20On%20Ke%20Ye%20Vaghti%20(320).mp3?_ga=2.62326060.1808244596.1630225203-536456928.1629913724",
  },
  {
    id: 6,
    title: "Sirvan Khosravi",
    singer: "Amin Habibi",
    img: "https://nicmusic.net/wp-content/uploads/Hamid-Askari-Divooneh-Var.jpg",
    src: "https://dl.nicmusic.net/nicmusic/023/086/Hamid%20Askari%20-%20Doostaye%20Moshtarak%20320.mp3",
  },
  {
    id: 7,
    title: "Ghabe aks khali",
    singer: "Sirvan Khosravi",
    img: "https://upmusics.com/wp-content/uploads/2017/11/Sirvan-Khosravi-Ghabe-Akse-Khali.jpg",
    src: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20-%20Ghabe%20Akse%20Khali%20(320).mp3?_ga=2.231088543.1808244596.1630225203-536456928.1629913724",
  },
  {
    id: 8,
    title: "sokoot",
    singer: "Mohsen yegane",
    img: "https://upmusics.com/wp-content/uploads/2017/12/f.jpg",
    src: "https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Yeganeh%20-%20Sokoot(%20320).mp3?_ga=2.174927138.1808244596.1630225203-536456928.1629913724",
  },
];

export const getAllSongs = () => {
  return songs;
};
export const findOneByTitle = (a) => {
  return songs.find((e) => e.title === a);
};

export const getOneRandomSong = () => {
  return songs[Math.round(Math.random() * (songs.length - 1))];
};
