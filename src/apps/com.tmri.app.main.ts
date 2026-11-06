// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "交管12123",
  "id": "com.tmri.app.main",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25207240",
          "exampleUrls": "https://e.gkd.li/6bbf28ed-9e78-4006-9225-49c07954ee45",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "key": 0
        },
        {
          "matches": "ImageButton[vid=\"btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-确认退出",
      "desc": "点击[确认]",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"是否确认退出?\"]",
            "[text=\"确认\"]"
          ],
          "activityIds": "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15597285",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"立即更新\"]",
            "[text=\"以后再说\"]"
          ],
          "activityIds": "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
          "snapshotUrls": "https://i.gkd.li/i/15751656",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13315944",
            "https://i.gkd.li/i/13779215"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-通知弹窗",
      "desc": "关闭消息推送开启提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.login.FingerLockActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13315944",
            "https://i.gkd.li/import/13779215",
            "https://i.gkd.li/i/20239810"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-公告通知弹窗",
      "desc": "关闭公告通知弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"dialog_content_layout\"]",
          "action": "back",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18810054"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13315944",
            "https://i.gkd.li/import/13779215"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "ImageButton[id=\"com.tmri.app.main:id/btn_cancel\"]",
          "activityIds": [
            "com.tmri.app.ui.activity.main.MainTabHostNewActivity",
            "com.tmri.app.ui.activity.main.TmriNewActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13315944",
            "https://i.gkd.li/import/13779215"
          ],
          "key": 0
        }
      ]
    }
  ]
});
