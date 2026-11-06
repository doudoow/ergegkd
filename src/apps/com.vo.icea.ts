// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞韵听书",
  "id": "com.vo.icea",
  "groups": [
    {
      "name": "分段广告-播放界面卡片广告",
      "desc": "需点击二次弹窗关闭原因",
      "key": 0,
      "rules": [
        {
          "matches": "WebView @[text=\"反馈\"] - View > Image",
          "key": 0,
          "name": "点击\"反馈\"",
          "snapshotUrls": "https://i.gkd.li/i/13510973"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "name": "原因选\"不感兴趣\"",
          "snapshotUrls": "https://i.gkd.li/i/13510972",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13511052"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13511059",
            "https://i.gkd.li/i/13511065"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -n View > Image[text=\"\"][width<60]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13511052",
            "https://i.gkd.li/i/13511765"
          ]
        },
        {
          "matches": "[text=\"反馈\"] < View [text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "类型3",
          "snapshotUrls": "https://i.gkd.li/i/13446063"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/17691639",
          "exampleUrls": "https://e.gkd.li/396d9536-af27-4470-9d80-0a11456fc9ea"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13511708",
          "exampleUrls": "https://e.gkd.li/c5d254c2-97cb-4ab1-a271-d409b9841e94"
        }
      ]
    },
    {
      "name": "未分类-播放界面卡片式广告",
      "desc": "需点击二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "WebView @[text=\"反馈\"] - View > Image",
          "key": 0,
          "name": "点击【反馈】",
          "snapshotUrls": "https://i.gkd.li/i/13510973"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "原因选【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/13510972",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down\"]",
          "fastQuery": true,
          "key": 0,
          "name": "类型0",
          "snapshotUrls": "https://i.gkd.li/i/13511052"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 1,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13511645",
            "https://i.gkd.li/i/13511059",
            "https://i.gkd.li/i/13511065",
            "https://i.gkd.li/i/13511708"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -n View > Image[text=\"\"][width<60]",
          "key": 2,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13511052",
            "https://i.gkd.li/i/13511765"
          ]
        },
        {
          "matches": "[text=\"反馈\"] < View [text*=\"跳过\"][text.length<=10]",
          "key": 3,
          "name": "类型3",
          "snapshotUrls": "https://i.gkd.li/i/13446063"
        }
      ]
    },
    {
      "name": "局部广告-播放界面卡片式广告",
      "desc": "需点击二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "WebView @[text=\"反馈\"] - View > Image",
          "key": 0,
          "name": "点击【反馈】",
          "snapshotUrls": "https://i.gkd.li/import/13510973"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "原因选【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13510972",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down\"]",
          "fastQuery": true,
          "key": 0,
          "name": "类型0",
          "snapshotUrls": "https://i.gkd.li/import/13511052"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 1,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13511645",
            "https://i.gkd.li/import/13511059",
            "https://i.gkd.li/import/13511065",
            "https://i.gkd.li/import/13511708"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -n View > Image[text=\"\"][width<60]",
          "key": 2,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13511052",
            "https://i.gkd.li/import/13511765"
          ]
        },
        {
          "matches": "[text=\"反馈\"] < View [text*=\"跳过\"][text.length<=10]",
          "key": 3,
          "name": "类型3",
          "snapshotUrls": "https://i.gkd.li/import/13446063"
        }
      ]
    },
    {
      "name": "播放界面卡片式广告",
      "desc": "需点击二次弹窗关闭原因",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "WebView @[text=\"反馈\"] - View > Image",
          "key": 0,
          "name": "点击【反馈】",
          "snapshotUrls": "https://i.gkd.li/import/13510973"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "name": "原因选【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13510972",
          "key": 1
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down\"]",
          "quickFind": true,
          "key": 0,
          "name": "类型0",
          "snapshotUrls": "https://i.gkd.li/import/13511052"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 1,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13511645",
            "https://i.gkd.li/import/13511059",
            "https://i.gkd.li/import/13511065",
            "https://i.gkd.li/import/13511708"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -n View > Image[text=\"\"][width<60]",
          "key": 2,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13511052",
            "https://i.gkd.li/import/13511765"
          ]
        },
        {
          "matches": "[text=\"反馈\"] < View [text*=\"跳过\"][text.length<=10]",
          "key": 3,
          "name": "类型3",
          "snapshotUrls": "https://i.gkd.li/import/13446063"
        }
      ]
    }
  ]
});
