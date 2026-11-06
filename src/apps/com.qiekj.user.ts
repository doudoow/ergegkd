// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "胖乖生活",
  "id": "com.qiekj.user",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.qiekj.user:id/btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "activityIds": ".MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13435011"
        },
        {
          "matches": "[vid=\"btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "activityIds": ".MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13435011"
        },
        {
          "matches": "[id=\"com.qiekj.user:id/btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/import/13435011",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-开启[自动抵扣]开关",
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"switchView\"][checked=false] - [vid=\"tv_automatic_use\"]",
          "activityIds": ".ui.activity.scan.AfterPayUseAct",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17260785",
          "exampleUrls": "https://e.gkd.li/85bbfba2-5011-4f48-a08a-45386836ebd6",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text*=\"广告\"][visibleToUser=true]",
            "[text=\"关闭\"][visibleToUser=true]"
          ],
          "activityIds": ".ui.activity.home.MyDeviceAct",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18032031",
          "exampleUrls": "https://e.gkd.li/bccff301-de1c-4d70-8b99-f9acf8e04efa"
        },
        {
          "matches": "[vid=\"tianmu_widget_iv_close\"]",
          "activityIds": "com.tianmu.biz.activity.InterstitialActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18033023",
          "exampleUrls": "https://e.gkd.li/3f3d3462-7121-4f37-8252-1ef82e74f626"
        },
        {
          "matches": "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12903095",
          "exampleUrls": "https://e.gkd.li/343016ff-dd8f-4a19-8e3c-63520b087e98"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] + RelativeLayout >2 [text=\"反馈\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18094642",
          "exampleUrls": "https://e.gkd.li/501c8360-a261-40fb-b361-f1c6493289d7"
        },
        {
          "matches": "[vid=\"iv_cancel\" || vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/24045175",
            "https://i.gkd.li/i/24100793"
          ],
          "exampleUrls": "https://e.gkd.li/13b65be1-e126-4a32-a4d8-efc0f20623bc"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][width<100 && height<100] - [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.octopus.ad.AdActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/24100775",
          "exampleUrls": "https://e.gkd.li/c5363e69-4206-4266-9e45-3ce1cc650bd2"
        }
      ]
    },
    {
      "name": "开屏广告",
      "order": -10,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.qiekj.user:id/native_splash_view\"] >n [text^=\"跳过\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12903088"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n [text=\"跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12903086"
        },
        {
          "matches": "[id=\"com.kwad.dy.sdk:id/ksad_splash_root_container\"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12903095"
        }
      ]
    },
    {
      "name": "功能类-支付自动抵扣",
      "desc": "点击【自动抵扣】开关",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"tv_automatic_use\"] + [vid=\"switchView\"][checked=false]",
          "snapshotUrls": "https://i.gkd.li/i/17260785",
          "exampleUrls": "https://e.gkd.li/23e3fc7e-1668-448d-824e-3e7238b18972",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗",
      "desc": "点击【X】/【跳过】",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "@TextView[text=\"广告\"]",
            "@TextView[id=\"close_btn\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/17789291",
            "https://i.gkd.li/i/17789294"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.qiekj.user:id/btn_cancelUpdate\"][text*=\"暂不更新\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13435011"
        }
      ]
    }
  ]
});
