// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "绿洲",
  "id": "com.sina.oasis",
  "groups": [
    {
      "name": "分段广告-首页推荐广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sina.oasis:id/gdt_v2_banner_ad_close_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13434468"
        },
        {
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/13498631",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"gdt_v2_banner_ad_close_btn\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13434468"
        }
      ]
    },
    {
      "name": "未分类-首页-推荐广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sina.oasis:id/gdt_v2_banner_ad_close_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13434468"
        },
        {
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/13498631",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-推荐广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sina.oasis:id/gdt_v2_banner_ad_close_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13434468"
        },
        {
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13498631",
          "key": 1
        }
      ]
    },
    {
      "name": "首页-推荐广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sina.oasis:id/gdt_v2_banner_ad_close_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13434468"
        },
        {
          "matches": "@LinearLayout > [text*=\"关闭此广告\"][text.length<=10]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/13498631",
          "key": 1
        }
      ]
    }
  ]
});
