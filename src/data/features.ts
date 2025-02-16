import cameraIcon from '../assets/images/icons/galery.svg';
// import musicIcon from '../assets/images/icons/music.svg';
import checkSquareIcon from '../assets/images/icons/todolist.svg';
import gameIcon from '../assets/images/icons/game.svg';
import mailIcon from '../assets/images/icons/loveletter.svg';



export const features = [
  {
    id: 'gallery',
    icon: cameraIcon, // Path ke gambar ikon
    title: 'Gallery',
    path: '/gallery',
    animation: {
      hover: { scale: 1.1, rotate: [0, -10, 10, 0] },
      tap: { scale: 0.9 }
    }
  },
  // {
  //   id: 'card',
  //   icon: heartIcon, // Path ke gambar ikon
  //   title: 'Love Card',
  //   path: '/photo-card',
  //   animation: {
  //     hover: { scale: 1.1, y: -10 },
  //     tap: { scale: 0.9 }
  //   }
  // },
  // {
  //   id: 'music',
  //   icon: musicIcon, // Path ke gambar ikon
  //   title: 'Music',
  //   path: '/music',
  //   animation: {
  //     hover: { scale: 1.1, rotate: 360 },
  //     tap: { scale: 0.9 }
  //   }
  // },
  {
    id: 'todo',
    icon: checkSquareIcon, // Path ke gambar ikon
    title: 'Plans',
    path: '/todo-list',
    animation: {
      hover: { scale: 1.1, rotateY: 180 },
      tap: { scale: 0.9 }
    }
  },
  {
    id: 'games',
    icon: gameIcon, // Path ke gambar ikon
    title: 'Mini Games',
    path: '/games',
    animation: {
      hover: { scale: 1.1, rotate: 360 },
      tap: { scale: 0.9 }
    }
  },
  {
    id: 'letter',
    icon: mailIcon, // Path ke gambar ikon
    title: 'Letter',
    path: '/love-letter',
    animation: {
      hover: { scale: 1.1, rotate: 360 },
      tap: { scale: 0.9 }
    }
  }
];