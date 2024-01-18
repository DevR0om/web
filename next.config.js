const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
      domains: ['i.ibb.co','freepngimg.com','media.licdn.com',"cdn.sanity.io",'cdn-icons-png.flaticon.com' ,'w0.peakpx.com', 'www.blog.omertex.com', 'wallpapercave.com', 'i.postimg.cc'],
      path: '/_next/image',
      loader: 'default',
      loaderFile: '',
      disableStaticImages: true,
      minimumCacheTTL: 60,
      formats: ['image/webp', 'image/avif'],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      contentDispositionType: 'inline',
      remotePatterns: [],
      unoptimized: false,
  
  },
});
