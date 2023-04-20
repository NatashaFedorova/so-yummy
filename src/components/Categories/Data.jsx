import img from './assort.jpg';
import img2 from './blin.jpg';
import img3 from './egg.jpg';
import img4 from './spinach.jpg';

const myCategory = [
  {
    name: 'Beef',
    id: 1,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Breakfast',
    id: 2,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Chicken',
    id: 3,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Desserts',
    id: 4,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Goat',
    id: 5,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Lamb',
    id: 6,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Miscellaneous',
    id: 7,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Pasta',
    id: 8,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Pork',
    id: 9,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Seafood',
    id: 10,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
  {
    name: 'Side',
    id: 11,
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasenin-depositphotos.jpg&tbnid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDnsQMygCegUIARCiAQ',
  },
];

const myRez = [
  {
    id: 1,
    title: [
      {
        title: 'patitlekcake',
        photo: img,
      },
      {
        title: 'eegs',
        photo: img2,
      },
      {
        title: 'fri eggs',
        photo: img3,
      },
      {
        title: 'some',
        photo: img4,
      },
      {
        title: 'aaa1',
        photo: img,
      },
      {
        title: 'aa',
        photo: img2,
      },
      {
        title: 'a',
        photo: img3,
      },
      {
        title: 'a2',
        photo: img4,
      },
    ],
  },
  {
    id: 2,
    title: [
      {
        title: 'ba1',
        photo: img,
      },
      {
        title: 'ba',
        photo: img2,
      },
      {
        title: 'b',
        photo: img3,
      },
      {
        title: 'bb2',
        photo: img4,
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 3,
    title: [
      {
        title: 'cc',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'c',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'c',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 4,
    title: [
      {
        title: 'aaa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'aa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'a',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 5,
    title: [
      {
        title: 'aaa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'aa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'a',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 6,
    title: [
      {
        title: 'aaa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'aa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'a',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 7,
    title: [
      {
        title: 'aaa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'aa',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
      {
        title: 'a',
        photo:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 8,
    title: [
      {
        title: 'pasta',
        photo: img,
      },
      {
        title: 'ba',
        photo: img2,
      },
      {
        title: 'b',
        photo: img3,
      },
      {
        title: 'bb2',
        photo: img4,
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 9,
    title: [
      {
        title: 'ba1',
        photo: img,
      },
      {
        title: 'ba',
        photo: img2,
      },
      {
        title: 'b',
        photo: img3,
      },
      {
        title: 'bb2',
        photo: img4,
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 10,
    title: [
      {
        title: 'ba1',
        photo: img,
      },
      {
        title: 'ba',
        photo: img2,
      },
      {
        title: 'b',
        photo: img3,
      },
      {
        title: 'bb2',
        photo: img4,
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
  {
    id: 11,
    title: [
      {
        title: 'ba1',
        photo: img,
      },
      {
        title: 'ba',
        photo: img2,
      },
      {
        title: 'b',
        photo: img3,
      },
      {
        title: 'bb2',
        photo: img4,
      },
    ],
    photo:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Flifeimg.pravda.com%2Fimages%2Fdoc%2Fe%2F0%2Fe04e973--vadimvasetitleititle-depositphotos.jpg&tbtitleid=eOV9YzCwHkgqfM&vet=12ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ..i&imgrefurl=https%3A%2F%2Flife.pravda.com.ua%2Fhealth%2F2021%2F04%2F19%2F244557%2F&docid=8i_scYr1CZmcMM&w=755&h=504&q=%D1%84%D0%BE%D1%82%D0%BE%20%D1%97%D0%B6%D0%B0&ved=2ahUKEwj_sdSus67-AhXTvSoKHfdaDtitlesQMygCegUIARCiAQ',
  },
];

export const getCategory = () => {
  return myCategory;
};
export const getDishes = () => {
  return myRez;
};
