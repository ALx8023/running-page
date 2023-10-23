interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Loyyds Running Page',
  siteUrl: 'https://www.xiaohongshu.com/user/profile/5cc3fc7c000000001100f023?xhsshare=CopyLink&appuid=5cc3fc7c000000001100f023&apptime=1693296206',
  logo: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nta7sgs1e005n63vhu49s13clqoako?imageView2/2/w/540/format/webp|imageMogr2/strip',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Lo',
      url: 'https://www.xiaohongshu.com/user/profile/5cc3fc7c000000001100f023?xhsshare=CopyLink&appuid=5cc3fc7c000000001100f023&apptime=1693296206',
    },
    {
      name: 'About',
      url: 'https://www.xiaohongshu.com/user/profile/5cc3fc7c000000001100f023?xhsshare=CopyLink&appuid=5cc3fc7c000000001100f023&apptime=1693296206',
    },
  ],
};

export default data;
