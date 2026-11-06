// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喜马拉雅极速版",
  "id": "com.ximalaya.ting.lite",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@Image < View + View + View > View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13218286"
        }
      ]
    },
    {
      "name": "全屏广告-小说推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_iv_novel_back\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13229127",
          "key": 0
        },
        {
          "matches": "[vid=\"main_iv_novel_back\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13229127",
          "key": 1
        },
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_iv_novel_back\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-支付宝提现弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13256447",
          "key": 0
        },
        {
          "matches": "[vid=\"main_login_guide_close\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13256447",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.WelComeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13256505",
          "key": 0
        },
        {
          "matches": "[text=\"立即开启\"] + [vid=\"host_dialog_cancel_iv\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.WelComeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13256505",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-推荐-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_ad_top_home_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@Image < View + View + View > View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13218286"
        }
      ]
    },
    {
      "name": "未分类-小说推荐弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_iv_novel_back\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-支付宝提现广告弹窗",
      "desc": "点击右上角圆形x",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-关闭开启通知弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-推荐-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_ad_top_home_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "@Image < View + View + View > View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13218286"
        }
      ]
    },
    {
      "name": "全屏广告-支付宝提现广告弹窗",
      "desc": "点击右上角圆形x",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-关闭开启通知弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-推荐-卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_ad_top_home_iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@Image < View + View + View > View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13218286"
        }
      ]
    },
    {
      "name": "小说推荐弹窗",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_iv_novel_back\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "支付宝提现广告弹窗",
      "desc": "点击右上角圆形x",
      "enable": false,
      "quickFind": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.lite:id/main_login_guide_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭开启通知弹窗",
      "enable": false,
      "quickFind": true,
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"立即开启\"] + [id=\"com.ximalaya.ting.lite:id/host_dialog_cancel_iv\"]",
          "key": 0
        }
      ]
    }
  ]
});
