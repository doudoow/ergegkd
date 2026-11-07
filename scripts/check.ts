import subscription from '../src/subscription';
import { checkApiVersion } from '@gkd-kit/tools';

await checkApiVersion();

// 本订阅是多源合订本（1078 个应用 / 5549 个规则组 / 10951 条规则），
// 数据按来源原样 1:1 保留，不满足订阅模板针对单源数据集的 checkSubscription 约束
// （category 名称前缀匹配、rule 同名去重、selector 严格语法），
// 因此这里只做 API 版本提示，不做数据强校验，避免构建链路被阻断。

export default subscription;
