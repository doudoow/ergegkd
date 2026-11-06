// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "慧新易校",
  "id": "com.synjones.mobilegroup.ECampus",
  "groups": [
    {
      "name": "更新提示",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"content\"] +2 [vid=\"versionchecklib_version_dialog_cancel\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.synjones.mobilegroup.lib_checkversion_and_update.v2.ui.UIActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26396872",
          "exampleUrls": "https://e.gkd.li/c8c94f94-8f23-43bc-8e07-c1b088f478e1",
          "key": 0
        }
      ]
    }
  ]
});
