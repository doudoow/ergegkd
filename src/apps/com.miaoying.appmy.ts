// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "天空影视",
  "id": "com.miaoying.appmy",
  "groups": [
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12846524"
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12846524"
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.huawei.android.launcher.unihome.UniHomeLauncher",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12846524"
        }
      ]
    }
  ]
});
