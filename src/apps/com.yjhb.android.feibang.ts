// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "赏帮赚",
  "id": "com.yjhb.android.feibang",
  "groups": [
    {
      "name": "功能类-取消报名直接确认",
      "desc": "跳过二次确认",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"确定取消报名？\"] < LinearLayout + [childCount=2] >2 [text=\"确定\"]",
          "activityIds": "com.zx.core.code.activity.MyTaskActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26903991",
          "exampleUrls": "https://e.gkd.li/eebf7a06-0263-4d0d-961f-eae45a328f08",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-上传自动选择截图",
      "desc": "选中第一个并点击完成",
      "actionMaximum": 1,
      "resetMatch": "match",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"请选择\"]",
            "@LinearLayout[index=1] <2 [index=0] < [index=1] - [childCount=2] >2 [text=\"相机胶卷\"][visibleToUser=true]"
          ],
          "key": 0,
          "name": "选中第一个图片",
          "snapshotUrls": "https://i.gkd.li/i/26904379",
          "exampleUrls": "https://e.gkd.li/a9c0a7d1-2ffd-4718-8277-91c68919f96d"
        },
        {
          "matches": "[text=\"1\"] + [text=\"已完成\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "name": "点击已完成",
          "snapshotUrls": "https://i.gkd.li/i/26904647",
          "exampleUrls": "https://e.gkd.li/866bc10a-b62b-4948-ad56-6206b2349054",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动领取奖励",
      "desc": "每日专享=> 点击 领奖励",
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"领奖励\"][visibleToUser=true] < * <6 [childCount=6] <2 View[childCount<3] <n View[childCount=5] <n * < WebView <<4 LinearLayout <2 [id=\"android:id/content\"]",
          "activityIds": "com.zx.core.code.activity.WebViewActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/28591915",
            "https://i.gkd.li/i/29405634"
          ],
          "exampleUrls": "https://e.gkd.li/b28c9e1c-d92d-413b-b30b-c994b2d3f582",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动关闭[按要求提交信息]提示",
      "actionMaximum": 2,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"不再提醒\"] - @View[clickable=true][focusable=true][text=null] < [childCount=2] - LinearLayout > [text^=\"请按照悬赏要求提交验证信息\"][visibleToUser=true]",
          "key": 0,
          "name": "勾选[不再提醒]",
          "snapshotUrls": "https://i.gkd.li/i/29405401",
          "exampleUrls": "https://e.gkd.li/16bd85ec-1d56-48d1-a779-b68014557dee"
        },
        {
          "matches": "[text=\"确定\"][clickable=true][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "name": "点击[确定]",
          "snapshotUrls": "https://i.gkd.li/i/29405401",
          "key": 1
        }
      ]
    }
  ]
});
