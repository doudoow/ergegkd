// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "考试宝",
  "id": "com.kaoshibaodian.app",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid=\"ad_layout\"]",
          "activityIds": [
            "ksbd.quiz.QuizActivity",
            "ksbd.app.practice.QuizActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16492043",
            "https://i.gkd.li/i/21617553"
          ],
          "exampleUrls": "https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073"
        },
        {
          "matches": "[vid=\"close_iv\"]",
          "activityIds": [
            "ksbd.quiz.QuizActivity",
            "ksbd.app.practice.QuizActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16492043",
            "https://i.gkd.li/i/21617553"
          ],
          "exampleUrls": "https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073"
        },
        {
          "matches": "FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid=\"ad_layout\"]",
          "activityIds": "ksbd.quiz.QuizActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16492043",
          "exampleUrls": "https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073"
        },
        {
          "matches": "[vid=\"close_iv\"]",
          "activityIds": "ksbd.quiz.QuizActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16492043",
          "exampleUrls": "https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "ksbd.app.home.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16492018",
          "exampleUrls": "https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101"
        },
        {
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "activityIds": "ksbd.app.lib.libOrExam.ExerciseAct",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/21617539",
          "exampleUrls": "https://e.gkd.li/bc0fdaa3-a33e-48ba-83aa-28a28da60d3a"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "activityIds": "ksbd.app.home.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/16492018",
          "exampleUrls": "https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101",
          "key": 2
        }
      ]
    }
  ]
});
