// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "超级课程表",
  "id": "com.xtuone.android.syllabus",
  "groups": [
    {
      "name": "局部广告-首页卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/treehole_banner_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840733",
          "key": 0
        },
        {
          "matches": "[vid=\"treehole_banner_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/12840733",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-课程表界面广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/imgv_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/12999642",
          "key": 0
        },
        {
          "matches": "[vid=\"imgv_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/12999642",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/dialog_ad_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13166501",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_ad_close\"]",
          "activityIds": "com.xtuone.android.friday.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13166501",
          "key": 1
        },
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/dialog_ad_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"update_cancel\"] + [vid=\"go_to_update\"]",
          "activityIds": "com.xtuone.android.friday.UpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/14292875",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页banner广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/treehole_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-课程表界面广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/imgv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/dialog_ad_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页banner广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/treehole_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-课程表界面广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/imgv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页banner广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/treehole_banner_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "课程表界面广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/imgv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.xtuone.android.syllabus:id/dialog_ad_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
