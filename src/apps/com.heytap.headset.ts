// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "欢律",
  "id": "com.heytap.headset",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"发现新版本\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".component.about.FindAppUpgradeActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14971296",
            "https://i.gkd.li/i/20601909"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-耳机固件更新弹窗",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"耳机固件更新\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".component.detail.DeviceDetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/20601911",
          "exampleUrls": "https://e.gkd.li/2336ee00-71e3-4e5e-b6e1-d81ea412b67b",
          "key": 0
        }
      ]
    }
  ]
});
