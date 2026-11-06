// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "万能遥控",
  "id": "com.duokan.phone.remotecontroller",
  "groups": [
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] >2 [text=\"取消\"]",
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13642080",
          "key": 0
        },
        {
          "matches": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] [text=\"取消\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"ll_permission\"] >2 [text=\"取消\"]",
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13642080",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"image_close_banner\"][visibleToUser=true]",
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22451785",
          "exampleUrls": "https://e.gkd.li/bf36812a-1bf9-43dc-aca5-f351c2f8d1f6",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "desc": "关闭主界面底部的横幅广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"image_close_banner\"][visibleToUser=true]",
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22451785",
          "key": 0
        },
        {
          "matches": "ImageView[id=`com.duokan.phone.remotecontroller:id/image_close_banner`]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-申请定位",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "底部横幅广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[id=`com.duokan.phone.remotecontroller:id/image_close_banner`]",
          "key": 0
        }
      ]
    },
    {
      "name": "申请定位",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
