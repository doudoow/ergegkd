// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "石墨文档",
  "id": "chuxin.shimo.shimowendang",
  "groups": [
    {
      "name": "局部广告-首页顶部横幅广告",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"banner-desktop-announcement-close\"][visibleToUser=true] - ViewGroup > [text*=\"免费试用企业版\"]",
          "activityIds": "chuxin.shimo.shimowendang.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13627960",
          "key": 0
        },
        {
          "matches": "@[desc=\"banner-desktop-announcement-close\"][visibleToUser=true] - ViewGroup > [text*=\"免费试用企业版\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13627960",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页顶部横幅广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"banner-desktop-announcement-close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页顶部横幅广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"banner-desktop-announcement-close\"]",
          "key": 0
        }
      ]
    }
  ]
});
