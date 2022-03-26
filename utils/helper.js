export const GetAssetUrl= (folder,file)=>{
      const bucketUrl= process.env.ASSETS_BUCKET;
      console.log(bucketUrl);
      return `${bucketUrl}${folder}/${file}`;
}

export const GetAsseFileUrl= (file)=>{
      const bucketUrl= process.env.ASSETS_BUCKET;
      console.log(bucketUrl);
      return `${bucketUrl}${file}`;
}

