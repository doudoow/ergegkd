// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "阿里巴巴",
  "id": "com.alibaba.wireless",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.wireless:id/update_button_cancel\"]",
          "activityIds": [
            ".launch.home.V5HomeActivity",
            ".workbench.myali.MyAliSettingActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12684422",
            "https://i.gkd.li/i/12684426"
          ]
        },
        {
          "matches": "[vid=\"update_pop_cancel_btn\"]",
          "activityIds": ".launch.home.V5HomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15004486"
        },
        {
          "matches": "[id=\"com.alibaba.wireless:id/update_button_cancel\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12684422",
            "https://i.gkd.li/i/12684426"
          ]
        },
        {
          "matches": "[vid=\"update_pop_cancel_btn\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15004486"
        },
        {
          "matches": "[vid=\"update_button_cancel\"]",
          "activityIds": [
            ".launch.home.V5HomeActivity",
            ".workbench.myali.MyAliSettingActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12684422",
            "https://i.gkd.li/i/12684426"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@Image[text*=\"FXa-124-124\"][visibleToUser=true] <<n [id=\"com.alibaba.wireless:id/v_yacht_float_cell\"]",
          "actionMaximum": 1,
          "activityIds": "com.alibaba.wireless.launch.home.V5HomeActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/13683509",
            "https://i.gkd.li/i/13683510"
          ],
          "key": 0
        },
        {
          "matches": "@Image[text*=\"FXa-124-124\"][visibleToUser=true] <<n [vid=\"v_yacht_float_cell\"]",
          "actionMaximum": 1,
          "activityIds": ".launch.home.V5HomeActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": [
            "https://i.gkd.li/i/13683509",
            "https://i.gkd.li/i/13683510"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "WebView >n View > Image[text*=\"FXa-124-124\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.alibaba.wireless:id/update_title\"] +(2) LinearLayout >(2) [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "WebView >n View > Image[text*=\"FXa-124-124\"]",
          "key": 0
        }
      ]
    }
  ]
});
