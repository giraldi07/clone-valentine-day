export const features = [
  {
    id: 'gallery',
    icon: 'Camera',
    title: 'Gallery',
    path: '/gallery',
    animation: {
      hover: { scale: 1.1, rotate: [0, -10, 10, 0] },
      tap: { scale: 0.9 }
    }
  },
  {
    id: 'card',
    icon: 'Heart',
    title: 'Love Card',
    path: '/photo-card',
    animation: {
      hover: { scale: 1.1, y: -10 },
      tap: { scale: 0.9 }
    }
  },
    {
    id: 'card',
    icon: 'Gift',
    title: 'Gift for you',
    path: '/closing',
    animation: {
      hover: { scale: 1.1, y: -10 },
      tap: { scale: 0.9 }
    }
  },
  // {
  //   id: 'music',
  //   icon: 'Music',
  //   title: 'Music',
  //   path: '/music',
  //   animation: {
  //     hover: { scale: 1.1, rotate: 360 },
  //     tap: { scale: 0.9 }
  //   }
  // },
  // {
  //   id: 'todo',
  //   icon: 'CheckSquare',
  //   title: 'Plans',
  //   path: '/todo-list',
  //   animation: {
  //     hover: { scale: 1.1, rotateY: 180 },
  //     tap: { scale: 0.9 }
  //   }
  // },
  // {
  //   id: 'games',
  //   icon: 'Gamepad2', // Icon dari Lucide React
  //   title: 'Mini Games',
  //   path: '/games', // Path ke halaman Games.tsx
  //   animation: {
  //     hover: { scale: 1.1, rotate: 360 },
  //     tap: { scale: 0.9 }
  //   }
  // },
  {
    id: 'letter',
    icon: 'Mail',
    title: 'Letter',
    path: '/love-letter',
    animation: {
      hover: { scale: 1.1, rotate: 360 },
      tap: { scale: 0.9 }
    }
  }
];