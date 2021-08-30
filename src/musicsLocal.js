const songs = [
  {
    id: 1,
    title: "Baghalam kon",
    singer: "Amin Habibi",
    src: "musics/Amin Habibi - Baghalam Kon.mp3",
    img: "/musics/img/amin-habibi.jpg",
  },
  {
    id: 2,
    title: "Khoshbakhtit arezome",
    singer: "Siamak abbasi",
    img: "/musics/img/siamak-khosh.jpg",
    src: "musics/Siamak Abbasi - Khoshbakhtit Arezoome (320).mp3",
  },
  {
    id: 3,
    title: "Behet ghol midam",
    singer: "Mohsen yegane",
    img: "/musics/img/ghol.jpg",
    src: "musics/Mohsen Yeganeh - Behet Ghol Midam (320).mp3",
  },
  {
    id: 4,
    title: "Be hamin zoodi",
    singer: "Sirvan Khosravi",
    img: "/musics/img/be hamin zoodi.jpg",
    src: "musics/Sirvan Khosravi – Be Hamin Zoodi (UpMusic).mp3",
  },
  {
    id: 5,
    title: "Bigharar",
    singer: "Amin Habibi",
    img: "/musics/img/bighara.jpg",
    src: "musics/Amin Habibi - On Ke Ye Vaghti (320).mp3",
  },
  {
    id: 6,
    title: "Doostaye Moshtarak",
    singer: "Hamid Asgari",
    img: "/musics/img/Hamid-Askari-Divooneh-Var.jpg",
    src: "musics/Hamid Askari - Doostaye Moshtarak 320.mp3",
  },
  {
    id: 7,
    title: "Ghabe aks khali",
    singer: "Sirvan Khosravi",
    img: "/musics/img/Sirvan-Khosravi-Ghabe-Akse-Khali.jpg",
    src: "musics/Sirvan Khosravi - Ghabe Akse Khali (320).mp3",
  },
  {
    id: 8,
    title: "sokoot",
    singer: "Mohsen yegane",
    img: "/musics/img/yeghane sokot.jpg",
    src: "musics/Mohsen Yeganeh - Sokoot( 320).mp3",
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
