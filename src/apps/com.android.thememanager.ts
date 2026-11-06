// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "主题壁纸",
  "id": "com.android.thememanager",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "该广告的第二段需开启[智能服务]的对应规则才能关闭",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close_btn\"][visibleToUser=true]",
          "activityIds": [
            ".ThemeResourceProxyTabActivity",
            ".module.detail.view.ThemeDetailActivity",
            ".module.detail.view.WidgetDetailActivity",
            ".v9.WallpaperSubjectActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/17143445",
            "https://i.gkd.li/i/17143447",
            "https://i.gkd.li/i/17675601",
            "https://i.gkd.li/i/19637669"
          ],
          "key": 0
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
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[vid=\"cancel\"][desc=\"关闭\"]",
          "action": "clickCenter",
          "activityIds": [
            "com.android.thememanager.ThemeResourceTabActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13215038",
            "https://i.gkd.li/i/15286330"
          ],
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.android.thememanager:id/cancel\"][desc=\"关闭\"]",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"cancel\"][desc=\"关闭\"]",
          "action": "clickCenter",
          "activityIds": [
            ".ThemeResourceTabActivity",
            ".ThemeResourceProxyTabActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13215038",
            "https://i.gkd.li/i/15286330"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-右下角悬浮窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "activityIds": [
            "com.android.thememanager.ThemeResourceTabActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14722559",
            "https://i.gkd.li/i/15286334"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5",
          "key": 0
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": [
            ".ThemeResourceTabActivity",
            ".ThemeResourceProxyTabActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14722559",
            "https://i.gkd.li/i/15286334"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-主题详情底部广告",
      "desc": "注意如果使用 ADB 禁用了 MIUI 广告组件，点击此按钮会无反应，可关闭此规则，避免过多相同点击记录",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.android.thememanager:id/ad_close_btn\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭主题资源页面的广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[id=\"com.android.thememanager:id/cancel\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "主题详情底部广告",
      "desc": "注意如果使用ADB禁用了MIUI广告组件,点击此按钮会无反应,可关闭此规则,避免过多相同点击记录",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.android.thememanager:id/ad_close_btn\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "ImageView[id=\"com.android.thememanager:id/cancel\"][desc=\"关闭\"]",
          "key": 0
        }
      ]
    }
  ]
});
