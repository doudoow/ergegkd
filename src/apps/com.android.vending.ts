// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Google Play 商店",
  "id": "com.android.vending",
  "groups": [
    {
      "name": "功能类-Play保护机制弹窗",
      "desc": "点击[不发送]/[拒绝]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"保护机制\"] +3 @View[clickable=true] > [text=\"不发送\" || text=\"拒绝\"]",
          "activityIds": "com.google.android.finsky.protectdialogs.activity.PlayProtectDialogsActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14035144",
            "https://i.gkd.li/i/17375098"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击[以后再说]/[不用了]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@LinearLayout[childCount=0][visibleToUser=true] -3 [text^=\"体验\" || text^=\"隆重推出\"]",
          "position": {
            "left": "width * 0.5",
            "top": "height * 0.75"
          },
          "activityIds": "com.google.android.finsky.activities.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15286041",
            "https://i.gkd.li/i/16397947"
          ]
        },
        {
          "matches": "[text=\"以后再说\" || text=\"不用了\" || text=\"No thanks\" || text=\"Not now\"][visibleToUser=true]",
          "activityIds": "com.google.android.finsky.activities.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14958783",
            "https://i.gkd.li/i/16079813",
            "https://i.gkd.li/i/17622043",
            "https://i.gkd.li/i/18135816",
            "https://i.gkd.li/i/18609168"
          ]
        }
      ]
    },
    {
      "name": "功能类-不开启生物识别支付",
      "desc": "点击[以后再说]",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"要使用指纹或人脸验证购买交易吗？\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "activityIds": "com.google.android.finsky.billing.acquire.SheetUiBuilderHostActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23289407",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-隐私政策更新",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"更新 Google Play 隐私设置\"]",
            "[text=\"知道了\"][clickable=true]"
          ],
          "activityIds": "com.google.android.finsky.activities.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24982226",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-使用Points获得奖励弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"使用 Google Play Points 获得奖励\"] +3 * > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-[体验 Google Play Pass]弹窗",
      "desc": "点击[以后再说]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"体验 Google Play Pass，免费试用 1 个月\"]",
          "position": {
            "left": "width * 0.5",
            "top": "width * 1.5"
          },
          "activityIds": "com.google.android.finsky.activities.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14958783",
            "https://i.gkd.li/i/15286041"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示-应用评分",
      "desc": "弹出应用评分-以后再说",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] + FrameLayout >2 [text=\"提交\"] - [text=\"以后再说\"][clickable=true][visibleToUser=true]",
          "key": 0,
          "name": "点击[以后再说]",
          "snapshotUrls": "https://i.gkd.li/i/26145296",
          "exampleUrls": "https://e.gkd.li/1d9b6d74-9982-46f5-8866-b0585f91cfd1"
        },
        {
          "matches": "@LinearLayout[visibleToUser=true][childCount=0][width=getPrev(5).width] < ScrollView < LinearLayout < FrameLayout <2 ViewGroup < FrameLayout < [id=\"android:id/content\"]",
          "position": {
            "left": "width * 0.2556",
            "top": "width * 0.6708"
          },
          "key": 1,
          "name": "坐标点击[Not now]",
          "snapshotUrls": "https://i.gkd.li/i/28889464"
        }
      ]
    },
    {
      "name": "更新提示-某应用有更新",
      "desc": "点击x掉",
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[desc=\"Dismiss update dialog\"] < FrameLayout <2 LinearLayout < ViewGroup < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.google.android.finsky.playcoreacquisition.PlayCoreAcquisitionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28367489",
          "exampleUrls": "https://e.gkd.li/8a2ddf7c-f34f-4bc8-bc9d-bfbc79a8c145",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-继续前往Google Play",
      "desc": "无法完成更新=>继续前往...=>跳过更新",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[desc^=\"继续前往 G\"][visibleToUser=true] < @[clickable=true] <2 [index=parent.childCount.minus(1)] <n ScrollView <<5 [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/28419155",
          "exampleUrls": "https://e.gkd.li/8800489a-c8fc-4094-8435-90df93b1f45f"
        },
        {
          "matches": "[desc=\"跳过更新\"][visibleToUser=true] < @View[clickable=true] < [index=parent.childCount.minus(1)] <n [childCount>=5] <<5 [id=\"android:id/content\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/28419120",
          "exampleUrls": "https://e.gkd.li/2b889996-c96e-455e-acc6-dc3bfa9cd380",
          "key": 1
        }
      ]
    }
  ]
});
