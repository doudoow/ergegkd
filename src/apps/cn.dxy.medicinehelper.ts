// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "用药助手",
  "id": "cn.dxy.medicinehelper",
  "groups": [
    {
      "name": "更新提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"新版本\" || text$=\"更新\"][visibleToUser=true]",
            "[vid=\"iv_close\"][clickable=true]"
          ],
          "activityIds": [
            ".activity.MainComposeActivity",
            "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25292995",
            "https://i.gkd.li/i/25459354"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动领取每日叮当奖励",
      "desc": "点击带有叮当+x的去学习并返回",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"去学习\"] + [text^=\"+\"][text$=\"丁当\"] <6 @[clickable=true] <7 ScrollView < View <4 * < * < ComposeView < [id=\"android:id/content\"]",
          "activityIds": ".article.dailylearn.DailyLearnComposeActivity",
          "key": 0,
          "name": "每日学指南",
          "snapshotUrls": "https://i.gkd.li/i/25246837",
          "exampleUrls": "https://e.gkd.li/4af1bd7e-5a1a-4739-91b2-3bcc89431e3d"
        },
        {
          "matches": "@*[childCount=5][clickable=false][visibleToUser=true] < * < * < ComposeView < [id=\"android:id/content\"]",
          "action": "back",
          "preKeys": [
            0
          ],
          "activityIds": "cn.dxy.drugscomm.business.guide.simple.GuideSimpleComposeActivity",
          "name": "返回",
          "snapshotUrls": "https://i.gkd.li/i/25292779",
          "key": 1
        },
        {
          "matches": "@[text=\"去学习\"][visibleToUser=true] - [text=\" 人学习过\"] - * < View <4 * < ListView -3 * <<3 * -7 * < [id=\"root\"] <<4 FrameLayout - [vid=\"toolbar\"]",
          "activityIds": ".article.qa.QASheetActivity",
          "key": 2,
          "name": "诊疗问答",
          "snapshotUrls": "https://i.gkd.li/i/25604101",
          "exampleUrls": "https://e.gkd.li/f23f06ea-69f9-4b28-a520-60d64326e93e"
        },
        {
          "matches": "[vid=\"closeIcon\"]",
          "action": "back",
          "preKeys": [
            2
          ],
          "activityIds": "cn.dxy.drugscomm.web.WebActivity",
          "name": "返回1",
          "snapshotUrls": "https://i.gkd.li/i/25604253",
          "key": 3
        }
      ]
    },
    {
      "name": "功能类-自动展开详细信息",
      "desc": "药品说明书/处方信息-点击[展开]",
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"展开\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25246982",
            "https://i.gkd.li/i/25247525"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a10c00f2-b467-4489-96a9-56d477d5f982",
            "https://e.gkd.li/39e0cadc-198b-41e4-9dab-a7862d85cf23"
          ]
        },
        {
          "matches": "[text=\"展开\" || text=\"展开全部\"][visibleToUser=true]",
          "excludeMatches": "@[text=\"展开\" || text=\"展开全部\"][visibleToUser=true] -(-n+7) * < View +n View >2 [text*=\"会员\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25247361",
            "https://i.gkd.li/i/25604253"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25742110",
            "https://i.gkd.li/i/26180801",
            "https://i.gkd.li/i/26222767",
            "https://i.gkd.li/i/25742101"
          ],
          "exampleUrls": [
            "https://e.gkd.li/35e39eb1-960d-4108-b688-1248856107e7",
            "https://e.gkd.li/39e0cadc-198b-41e4-9dab-a7862d85cf23"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动横屏观看表格",
      "desc": "药品说明书表格 点击[横屏]",
      "key": 3,
      "rules": [
        {
          "matches": "TextView[text=\"横屏\"][visibleToUser=true]",
          "activityIds": "cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity",
          "snapshotUrls": "https://i.gkd.li/i/25247591",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"开通会员后\"] -n @ImageView[clickable=true][width<100] <2 View <<4 [id=\"android:id/content\"]",
          "activityIds": "cn.dxy.drugscomm.business.guide.detail.GuideDetailComposeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25247659",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - View[text=null] < View[index=parent.childCount.minus(1)] <n View <<2 ComposeView < [id=\"android:id/content\"]",
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25247624",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26222550",
          "exampleUrls": "https://e.gkd.li/8d879578-6ac6-4252-ab40-5a1101082538"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - ImageView -n * < View < * < ComposeView < [id=\"android:id/content\"]",
          "activityIds": "cn.dxy.drugscomm.business.guide.simple.GuideSimpleComposeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25460814",
            "https://i.gkd.li/i/25460845"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"去添加\"] <3 View -2 [text=\"我的订阅\"] <(1,2) View <2 * < * < ComposeView < [id=\"android:id/content\"]",
          "activityIds": ".user.biz.subscribe.list.SubscriptionCenterListComposeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25460862"
        },
        {
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] - View[text=null] < View[childCount=2] -n * < View < * < ComposeView < [id=\"android:id/content\"]",
          "activityIds": "cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/26178988",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26222375",
          "exampleUrls": "https://e.gkd.li/3795ef23-bcb4-48ac-a60b-52c49c6a3d67"
        },
        {
          "matches": "@ImageView[index=parent.childCount.minus(1)] -2 * < View < ScrollView < * < ComposeView <2 ScrollView < * < View < * < * < ComposeView < [id=\"android:id/content\"]",
          "activityIds": ".activity.MainComposeActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/26179229",
          "exampleUrls": "https://e.gkd.li/f2ac7d23-43a1-4729-b6fa-f45584afb395"
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "问是否有帮助 x掉",
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -n TextView[text*=\"有帮助吗\"] <2 View <<3 ComposeView < [id=\"android:id/content\"]",
          "activityIds": "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25247634",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-诊疗问答打开图片",
      "desc": "自动适应字数打开图片查看",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@Image[text.length>9] < View - TextView[text.length<30] < [visibleToUser=true] <n View < [index=parent.childCount.minus(1)] <n [id=\"root\"] <<4 * - [vid=\"toolbar\"]",
          "actionDelay": 5000,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25604101",
          "exampleUrls": [
            "https://e.gkd.li/fed97c9c-a07d-4662-9ec7-79c801500ae1",
            "https://e.gkd.li/c4925112-02a7-47d4-a299-3980ec253741"
          ]
        },
        {
          "matches": "@Image[text.length>9] < View - TextView[text.length<160] < [visibleToUser=true] <n View < [index=parent.childCount.minus(1)] <n [id=\"root\"] <<4 * - [vid=\"toolbar\"]",
          "actionDelay": 10000,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25604911"
        }
      ]
    }
  ]
});
