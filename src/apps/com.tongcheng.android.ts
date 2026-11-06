// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "同程旅行",
  "id": "com.tongcheng.android",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_home_ad_close\"][visibleToUser=true]",
          "activityIds": ".TongchengMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20921290",
          "exampleUrls": "https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"给个好评鼓励下吧\"][visibleToUser=true]",
            "[vid=\"iv_close\"][visibleToUser=true]"
          ],
          "activityIds": ".TongchengMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20921292",
          "exampleUrls": "https://e.gkd.li/60949e51-3d07-4eda-ab2d-9ff561d8b58c",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内卡片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13167070"
        },
        {
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13167149"
        }
      ]
    },
    {
      "name": "局部广告-应用内卡片广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13167070"
        },
        {
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13167149"
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13167070"
        },
        {
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13167149"
        }
      ]
    },
    {
      "name": "应用内卡片广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13167070"
        },
        {
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13167149"
        }
      ]
    }
  ]
});
