export const levels01to10 = [
  {
    id: 'cookingdom-game-level-1',
    title: 'Cookingdom 一级披萨入门指南',
    pageTitle: 'Cookingdom 一级披萨入门指南',
    pageSubtitle: '在料理王国第一关，通过制作你的第一块披萨来掌握基础知识。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_01.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'Cookingdom-Level-1-First-Pizza-Guide' } },
    iframeUrl: 'https://www.youtube.com/embed/ItLXkQrpelU',
    seo: {
      title: '料理王国 第1关 攻略 - 第一块披萨',
      description:
        '学习如何在料理王国第1关准备、烘烤和上菜你的第一块披萨。理解烹饪和顾客服务的基础知识。',
      keywords: '料理王国, 第1关, 第一块披萨, 攻略, 基础, 教程',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_01.webp',
      levelInfoHtml:
        '<h3>第一块披萨</h3><p><strong>难度：</strong>简单</p><p><strong>预计时间：</strong>1分钟</p><p><strong>奖励：</strong>3星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom 第 2 级炸土豆攻略',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
        },
      ],
    },
    detailsHtml: `
      <h2>游戏介绍</h2>
<p>在《Cookingdom》的第1关，玩家将学习如何制作和上菜披萨，这也是游戏中最基本的菜肴之一。本关重点帮助玩家熟悉烹饪过程、食材准备以及餐厅运作的基本节奏。</p>
<h2>第1关目标</h2>
<p>玩家需要制作并为顾客提供第一张披萨。制作披萨包含多个步骤，包括准备食材、烘焙和上菜。目标是迅速且准确地满足顾客需求，完成任务。</p>
<h2>披萨制作过程</h2>
<h3>准备披萨食材：</h3>
<p>首先，收集基本食材：披萨底、番茄酱、奶酪以及其他配料（如香肠、蘑菇）。</p>
<ul>
  <li><strong>披萨底：</strong> 从食材区拿一个披萨底。</li>
  <li><strong>番茄酱：</strong> 在披萨底上均匀涂抹番茄酱。</li>
  <li><strong>奶酪：</strong> 撒上奶酪，确保覆盖均匀。</li>
</ul>
<h3>添加配料：</h3>
<p>在第1关，配料简单，可以使用香肠或蘑菇等基础配料。</p>
<ul>
  <li>拖动配料放到披萨上，确保均匀分布，这样可以增强口味并提高顾客满意度。</li>
</ul>
<h3>烘焙披萨：</h3>
<p>将准备好的披萨放入烤箱中。</p>
<p><strong>注意：</strong> 烘焙时间至关重要。烤过头会把披萨烤焦，烤得不够则会生食。</p>
<p>在烘焙过程中要时刻观察披萨，确保它的颜色和质地完美。</p>
<h3>检查披萨是否烤熟：</h3>
<p>观察披萨的外观。当它变成金黄色，并且散发出香味时，就表示烤好了。</p>
<p>过度烘焙的披萨会变焦，味道变差，可能导致顾客不满意。</p>
<h3>上菜：</h3>
<p>将烤好的披萨从烤箱里取出，立即送到顾客的桌子上。</p>
<p><strong>注意：</strong> 时间很重要，等待太久会降低顾客满意度，影响你的分数和奖励。</p>
<h2>小贴士与技巧</h2>
<ul>
  <li><strong>时间管理：</strong> 学会管理时间，尤其是在烹饪和准备食材时。需要精确掌控烤箱。</li>
  <li><strong>提前准备食材：</strong> 在等待披萨烤制的过程中，可以提前准备其他食材或清洁厨房。提前准备可以加快上菜速度。</li>
  <li><strong>烤箱操作：</strong> 熟悉烤箱的使用。每种食物的烘焙时间不同，掌握烘焙时间。</li>
  <li><strong>顾客耐心：</strong> 顾客等待时间过长会降低耐心和评分，提升服务速度。</li>
  <li><strong>练习多任务处理：</strong> 在烤制披萨时

    `,
  },
  {
    id: 'cookingdom-game-level-2',
    title: 'Cookingdom 第2关 炸薯条通关攻略',
    pageTitle: 'Cookingdom 第2关 炸薯条通关攻略',
    pageSubtitle: '在 Cookingdom 第2关学习制作酥脆的炸薯条。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_02.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-2' },
    },
    iframeUrl: 'https://www.youtube.com/embed/oCegSIHLMNE',
    seo: {
      title: 'Cookingdom 第2关攻略 - 炸薯条',
      description:
        '掌握 Cookingdom 第2关的炸薯条制作技巧。学习炸制技巧、如何应对多个顾客，以及提升厨房效率的方法。',
      keywords: 'cookingdom，第2关，炸薯条，攻略，炸制，时间管理，厨房效率',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_02.webp',
      levelInfoHtml:
        '<h3>炸薯条</h3><p><strong>难度：</strong> 简单</p><p><strong>预计时间：</strong> 2分钟</p><p><strong>奖励：</strong> 3星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-1',
          title: 'Cookingdom 第1关<br/>初次披萨',
          imageUrl: '/images/guides_01.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-1' },
          },
        },
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom 第3关 冰卷通关攻略',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-3' },
          },
        },
      ],
    },
    detailsHtml: `
    <h2>欢迎来到 Cookingdom 第2关：炸土豆 通关指南</h2>
<p>
  欢迎来到 <strong>Cookingdom 第2关</strong>，你的任务是通过正确的工具、步骤与时机，制作出完美的
  <strong>炸土豆</strong>。本关卡将在无计时器的轻松环境中，引导玩家熟悉 Cookingdom 简洁而精确的烹饪机制。
</p>
<p>
  本攻略将为你提供通关 <strong>Cookingdom 第2关</strong> 的全部步骤，详细讲解所需食材、每一个操作与摆放位置。
</p>

---

<h2>所需食材与工具</h2>
<table>
  <thead>
    <tr>
      <th>食材/工具</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>土豆</td><td>3个</td><td>通过挖土豆小游戏获得。</td></tr>
    <tr><td>水</td><td>按需</td><td>用于清洗和焯水。</td></tr>
    <tr><td>削皮器</td><td>1个</td><td>用于削皮。</td></tr>
    <tr><td>刀</td><td>1把</td><td>用于切成薯条。</td></tr>
    <tr><td>案板</td><td>1块</td><td>用于削皮和切土豆。</td></tr>
    <tr><td>碗</td><td>1个（蓝色）</td><td>用于盛放切好的薯条，准备焯水。</td></tr>
    <tr><td>锅</td><td>1个</td><td>用于焯水。</td></tr>
    <tr><td>锅盖</td><td>1个</td><td>加速水煮沸。</td></tr>
    <tr><td>电磁炉</td><td>1个</td><td>焯水和炸薯条的加热源。</td></tr>
    <tr><td>捞网/滤网</td><td>1个</td><td>用于从水或油中捞出薯条。</td></tr>
    <tr><td>厨房纸</td><td>2张</td><td>吸干水焯后和炸后的薯条。</td></tr>
    <tr><td>托盘</td><td>1个（灰色）</td><td>与厨房纸一起使用。</td></tr>
    <tr><td>平底锅</td><td>1个</td><td>用于炸薯条。</td></tr>
    <tr><td>食用油</td><td>1瓶</td><td>用于炸制。</td></tr>
    <tr><td>面粉</td><td>1碗</td><td>炸前裹粉用。</td></tr>
    <tr><td>带盖塑料盒</td><td>1个</td><td>用于摇匀裹粉。</td></tr>
    <tr><td>盐罐</td><td>1个</td><td>最终调味。</td></tr>
    <tr><td>番茄酱瓶</td><td>1个</td><td>用于蘸酱。</td></tr>
    <tr><td>小蘸碗</td><td>1个</td><td>盛放番茄酱。</td></tr>
    <tr><td>盘子</td><td>1个（白色）</td><td>最终装盘用。</td></tr>
    <tr><td>叉子</td><td>1把</td><td>作为装盘配件。</td></tr>
  </tbody>
</table>

<h2>炸土豆完整步骤指南</h2>

<h3>步骤 1：收获土豆（小游戏）</h3>
<p>
  长按 <strong>土豆茎部</strong> 拔出根部的土豆。将健康的土豆拖入左侧的<strong>有土豆标志的麻袋</strong>中。
  避免放入右侧<strong>打叉标志的麻袋</strong>。
</p>
<p>
  💡 <strong>提示：</strong>尽快拖动所有好土豆进正确的麻袋，避免它们缩回去。
</p>

<h3>步骤 2：清洗土豆</h3>
<p>
  在水槽区，点击<strong>排水按钮</strong>，然后点击<strong>水龙头</strong>打开水流。将麻袋中的脏土豆逐个拖入水槽。
  清洗至发亮后，将土豆拖到旁边的<strong>粉红托盘</strong>上。关闭水龙头。
</p>
<p>
  💡 <strong>提示：</strong>确保每一个土豆都洗干净，直到闪闪发亮。
</p>

<h3>步骤 3：削皮并切成薯条</h3>
<p>
  将土豆放到<strong>案板</strong>上。选择<strong>削皮器</strong>，在土豆上来回拖动至完全削皮。
  然后使用<strong>刀具</strong>，先纵向沿着切割引导线切，再横向切成薯条。
  将薯条移入<strong>蓝色碗</strong>中，重复操作三次。
</p>
<p>
  💡 <strong>提示：</strong>遵循切割引导线，确保薯条大小均匀。
</p>

<h3>步骤 4：焯水</h3>
<p>
  将<strong>锅</strong>放到水龙头下加水。然后移至<strong>电磁炉</strong>上，盖上<strong>锅盖</strong>。
  开启炉子，等待水沸腾（冒泡）。取下锅盖，把<strong>切好的薯条</strong>倒入水中。
  等到薯条颜色变淡（焯水完成），用<strong>捞网</strong>捞出，放到铺有<strong>厨房纸的灰色托盘</strong>上。
</p>
<p>
  💡 <strong>提示：</strong>焯水时间不要太长，只需要稍微变色即可。
</p>

<h3>步骤 5：炸薯条</h3>
<p>
  将<strong>平底锅</strong>放在电磁炉上，开启加热。倒入<strong>食用油</strong>，等待油变热（油面微闪）。
  把<strong>面粉</strong>倒入<strong>塑料盒</strong>中，加入焯好的薯条。盖上盖子后剧烈摇晃（快速点击或拖动）。
  打开盖子，将裹粉的薯条倒入热油中，炸至<strong>金黄色</strong>。用<strong>捞网</strong>捞出，放入新的厨房纸上沥油。
</p>
<p>
  💡 <strong>提示：</strong>确保油足够热再放入薯条；摇晃均匀裹粉；炸至颜色漂亮即可。
</p>

<h3>步骤 6：装盘与摆盘</h3>
<p>
  将炸好的薯条从纸上移到<strong>白色盘子</strong>中。选中<strong>盐罐</strong>，在薯条上撒盐。
  选中<strong>番茄酱瓶</strong>，将番茄酱挤入<strong>小蘸碗</strong>中。将蘸碗放在盘边，最后加上<strong>叉子</strong>完成摆盘。
</p>
<p>
  💡 <strong>提示：</strong>薯条摆得整齐一点，别忘了加盐和番茄酱。
</p>

<h2>Cookingdom 第2关提示技巧</h2>
<ul>
  <li>在小游戏中只将土豆放入有土豆图标的麻袋。</li>
  <li>每个土豆都要彻底洗净。</li>
  <li>削皮与切割时按照指引操作，确保大小一致。</li>
  <li>焯水时间短有助于口感松软、外皮酥脆。</li>
  <li>油热之后再进行炸制能让薯条更酥脆。</li>
  <li>塑料盒摇动充分，确保裹粉均匀。</li>
  <li>焯水与炸制后都要用厨房纸吸干油水。</li>
</ul>

<h2>Cookingdom 第2关常见错误</h2>
<ul>
  <li>将土豆放入错误的麻袋（打叉的）。</li>
  <li>忘记清洗或削皮。</li>
  <li>切得太厚或大小不一。</li>
  <li>用冷水焯水或冷油炸薯条。</li>
  <li>焯水或炸制时间不对（过生或过熟）。</li>
  <li>薯条没有均匀裹粉。</li>
  <li>忘记加盐或准备番茄酱蘸碟。</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-3',
    title: 'Cookingdom 第 3 关 - 冰淇淋卷攻略',
    pageTitle: 'Cookingdom 第 3 关 - 冰淇淋卷攻略',
    pageSubtitle: '掌握 Cookingdom 第 3 关中制作冰淇淋卷的艺术。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_03.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-3' },
    },
    iframeUrl: 'https://www.youtube.com/embed/AKOuNnLSb88',
    seo: {
      title: 'Cookingdom 第 3 关攻略 - 冰淇淋卷',
      description:
        '学习在 Cookingdom 第 3 关中如何制作冰淇淋卷。掌握冷冻、卷制、装饰和上菜的技巧，快速满足顾客需求。',
      keywords: 'cookingdom, 第3关, 冰淇淋卷, 攻略, 冷冻, 配料, 甜品, 时间管理',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_03.webp',
      levelInfoHtml:
        '<h3>冰淇淋卷</h3><p><strong>难度：</strong>中等</p><p><strong>预计时间：</strong>3 分钟</p><p><strong>奖励：</strong>3 星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom 第 2 关 - 炸薯条攻略',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-2' },
          },
        },
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom 第 4 关 - 简易沙拉攻略',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-4' },
          },
        },
      ],
    },
    detailsHtml: `
    <h2>欢迎来到 Cookingdom 第3关：卷冰淇淋 完整攻略与指南</h2>
<p>
  欢迎来到 <strong>Cookingdom 第3关</strong>，你的任务是使用正确的工具、顺序和时机，制作出完美的
  <strong>卷冰淇淋</strong>。本关向玩家介绍 Cookingdom 直观且精准的烹饪机制，环境轻松无计时限制。
</p>
<p>
  本攻略为你提供了成功完成 <strong>Cookingdom 第3关</strong> 的详细步骤，包含所需的每种食材、操作和摆放。
</p>

<h2>所需食材</h2>
<table>
  <thead>
    <tr>
      <th>食材</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>冰淇淋基底（白色）</td>
      <td>共4球（每碗2球）</td>
      <td>卷冰淇淋的主要基底。</td>
    </tr>
    <tr>
      <td>香蕉</td>
      <td>约1/2根</td>
      <td>切片，用于第一种口味。</td>
    </tr>
    <tr>
      <td>猕猴桃</td>
      <td>约1/2个</td>
      <td>切丁，用于第二种口味。</td>
    </tr>
    <tr>
      <td>牛奶</td>
      <td>1盒</td>
      <td>倒在冷盘上的混合物中（使用两次）。</td>
    </tr>
    <tr>
      <td>彩色糖屑/糖果碎</td>
      <td>1盘</td>
      <td>两碗冰淇淋的装饰用。</td>
    </tr>
    <tr>
      <td>巧克力糖浆旋涡</td>
      <td>1盘</td>
      <td>预制旋涡，用作两碗冰淇淋的装饰。</td>
    </tr>
    <tr>
      <td>巧克力块</td>
      <td>1盘</td>
      <td>破碎的巧克力块，用作两碗冰淇淋的装饰。</td>
    </tr>
    <tr>
      <td>威化棒/百奇</td>
      <td>1杯</td>
      <td>两碗冰淇淋的装饰用。</td>
    </tr>
    <tr>
      <td>盛碗（蓝色）</td>
      <td>2个</td>
      <td>用来盛放最终制作的卷冰淇淋。</td>
    </tr>
  </tbody>
</table>

<h2>卷冰淇淋详细步骤攻略</h2>

<h3>步骤1. 添加基底和水果</h3>
<p>
  使用勺子，将 <strong>两球白色冰淇淋基底</strong>放置在冷盘上。选择 <strong>香蕉或猕猴桃</strong>，将水果片放在基底上。
</p>
<p>
  💡 <strong>提示：</strong>确保在搅拌前先放入水果，出现爱心图标表示放置正确。
</p>

<h3>步骤2. 切碎并搅拌水果</h3>
<p>
  使用 <strong>两把刮刀</strong>，反复将水果切碎并与冰淇淋基底充分搅拌混合在冷盘上。
</p>
<p>
  💡 <strong>提示：</strong>搅拌至水果完全融合，出现爱心图标表示混合充分。
</p>

<h3>步骤3. 添加牛奶 🥛</h3>
<p>
  将 <strong>牛奶</strong>从盒子中倒入切碎水果和冰淇淋混合物上。
</p>
<p>
  💡 <strong>提示：</strong>均匀倒在混合物上，等待出现爱心图标确认。
</p>

<h3>步骤4. 将混合物摊成薄层</h3>
<p>
  快速使用 <strong>刮刀</strong>将液态混合物均匀摊成 <strong>薄而平整的长方形层</strong>，覆盖整个冷盘。用垂直线划分成条状。
</p>
<p>
  💡 <strong>提示：</strong>动作要快，避免混合物结冻太硬。均匀薄层对卷出漂亮冰淇淋卷至关重要。摊开后会出现爱心图标。
</p>

<h3>步骤5. 卷冰淇淋</h3>
<p>
  用一把 <strong>刮刀</strong>置于某条冰淇淋条的底端边缘，以约45度角用力向前推刮，冰淇淋层会从冷盘上卷起成卷。依次完成所有条状冰淇淋卷。
</p>
<p>
  💡 <strong>提示：</strong>保持力度和角度稳定，才能卷出整齐的冰淇淋卷。全部卷完会出现爱心图标。
</p>

<h3>步骤6. 将冰淇淋卷放入碗中</h3>
<p>
  小心用 <strong>刮刀</strong>将每卷冰淇淋提起，直立放入 <strong>蓝色盛碗</strong>中。
</p>
<p>
  💡 <strong>提示：</strong>将卷冰淇淋整齐排列，填满盛碗。
</p>

<h3>步骤7. 添加装饰 🎉</h3>
<p>
  将 <strong>彩色糖屑</strong>撒在碗中的冰淇淋卷上。
  添加 <strong>巧克力糖浆旋涡</strong>。最后放入 <strong>巧克力块</strong>和 <strong>威化棒</strong>。
</p>
<p>
  💡 <strong>提示：</strong>按顺序添加装饰：糖屑 -> 糖浆旋涡 -> 巧克力/威化棒。添加糖浆和巧克力/威化棒后会出现爱心图标。
</p>

<h3>步骤8. 重复制作第二种口味</h3>
<p>
  使用另一种水果制作第二碗卷冰淇淋（如果先用的是香蕉，第二碗用猕猴桃，反之亦然）。重复步骤1-7。
</p>
<p>
  💡 <strong>提示：</strong>顾客需要两种口味（香蕉和猕猴桃）才能成功完成关卡。
</p>

<h2>Cookingdom 第3关 小技巧</h2>
<ul>
  <li>✔️ 摊开混合物时速度要快。</li>
  <li>✔️ 混合物摊得越薄，卷起来越容易。</li>
  <li>✔️ 掌握刮刀的角度是卷出完美冰淇淋卷的关键。</li>
  <li>✔️ 记得做出香蕉和猕猴桃两种口味满足顾客需求。</li>
  <li>✔️ 按视频顺序添加装饰。</li>
</ul>

<h2>Cookingdom 第3关 常见错误</h2>
<ul>
  <li>混合物摊得太厚，导致难以卷起。</li>
  <li>水果和基底搅拌不充分。</li>
  <li>卷冰淇淋速度太慢或力度、角度不正确，导致卷断裂。</li>
  <li>忘记添加牛奶。</li>
  <li>漏加装饰或装饰顺序错误。</li>
  <li>只制作了一种水果口味，未做两种要求口味。</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-4',
    title: 'Cookingdom 第4关攻略 – 简单沙拉',
    pageTitle: 'Cookingdom 第4关攻略 – 简单沙拉',
    pageSubtitle: '在 Cookingdom 第4关制作新鲜健康的简单沙拉。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_04.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-4' },
    },
    iframeUrl: 'https://www.youtube.com/embed/gwdtg5SY7qo',
    seo: {
      title: 'Cookingdom 第4关攻略 – 简单沙拉',
      description:
        '学习如何在 Cookingdom 第4关中快速高效地制作简单沙拉。跟随本攻略完成切菜、混合和上菜的全部步骤。',
      keywords: 'cookingdom，第4关，简单沙拉，攻略，切菜，混合，健康食物，厨房速度',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_04.webp',
      levelInfoHtml:
        '<h3>简单沙拉</h3><p><strong>难度：</strong>简单</p><p><strong>预计用时：</strong>2–3分钟</p><p><strong>奖励：</strong>3星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom 第3关攻略 – 炸冰淇淋卷',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-3' },
          },
        },
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom 第5关攻略 – 烤鱼',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-5' },
          },
        },
      ],
    },
    detailsHtml: `
    <h2>欢迎来到 Cookingdom 第4关：简单沙拉攻略与指南 🥗</h2>
<p>
  欢迎来到 <strong>Cookingdom 第4关</strong>，您的任务是使用正确的工具、顺序和时机，制作出完美的
  <strong>简单沙拉</strong>。本关为玩家介绍 Cookingdom 直观且精准的烹饪机制，环境轻松无计时限制。
</p>
<p>
  本攻略详细说明了成功通关 <strong>Cookingdom 第4关</strong>所需的每种食材、操作步骤及摆放位置。
</p>

<h2>所需食材</h2>
<table>
  <thead>
    <tr>
      <th>食材</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>生菜</td>
      <td>1颗</td>
      <td>需清洗和切割。</td>
    </tr>
    <tr>
      <td>鳄梨</td>
      <td>1个</td>
      <td>需清洗、去皮和切割。</td>
    </tr>
    <tr>
      <td>番茄</td>
      <td>1个</td>
      <td>需清洗和切割。</td>
    </tr>
    <tr>
      <td>洋葱</td>
      <td>1个</td>
      <td>需清洗和切割。</td>
    </tr>
    <tr>
      <td>红甘蓝</td>
      <td>1片</td>
      <td>需清洗和切割。</td>
    </tr>
    <tr>
      <td>胡萝卜</td>
      <td>1根</td>
      <td>需清洗、去皮和切割。</td>
    </tr>
    <tr>
      <td>水</td>
      <td>适量</td>
      <td>用于水槽中清洗蔬菜。</td>
    </tr>
    <tr>
      <td>削皮器</td>
      <td>1个</td>
      <td>用于削胡萝卜和鳄梨皮。</td>
    </tr>
    <tr>
      <td>刀具</td>
      <td>1把</td>
      <td>用于切割所有蔬菜。</td>
    </tr>
    <tr>
      <td>切菜板</td>
      <td>1块</td>
      <td>削皮和切割的操作台面。</td>
    </tr>
    <tr>
      <td>容器</td>
      <td>3个</td>
      <td>临时盛放已清洗和准备好的蔬菜（绿色、粉色、紫色边框）。</td>
    </tr>
    <tr>
      <td>搅拌碗</td>
      <td>1个（紫色）</td>
      <td>用于混合并拌匀沙拉食材。</td>
    </tr>
    <tr>
      <td>搅拌勺/夹具</td>
      <td>2个（木制）</td>
      <td>用于拌沙拉。</td>
    </tr>
    <tr>
      <td>装盘盘子</td>
      <td>1个（紫色边框）</td>
      <td>用于最终摆盘。</td>
    </tr>
    <tr>
      <td>大块生菜叶</td>
      <td>2-3片</td>
      <td>用作沙拉摆盘的底层。</td>
    </tr>
    <tr>
      <td>沙拉酱</td>
      <td>1瓶</td>
      <td>Kewpie风格瓶装，作为最后淋酱使用。</td>
    </tr>
  </tbody>
</table>

<h2>简单沙拉逐步攻略</h2>

<h3>步骤1. 清洗蔬菜</h3>
<p>
  在水槽处打开 <strong>水龙头</strong>。依次将<strong>生菜、鳄梨、番茄、洋葱、红甘蓝和胡萝卜</strong>
  拖入水槽中。等待每样蔬菜发光，表示清洗干净。将洗净的蔬菜放入<strong>临时容器</strong>中。关闭水龙头。
</p>
<p>
  💡 <strong>提示：</strong>确保每样蔬菜都发光后再取出。
</p>

<h3>步骤2. 切生菜</h3>
<p>
  将洗净的<strong>生菜</strong>放在<strong>切菜板</strong>上，选择<strong>刀具</strong>，根据屏幕引导切割生菜。
  将切好的生菜放入<strong>绿色容器</strong>中。
</p>
<p>
  💡 <strong>提示：</strong>切割时对准引导线，确保切得合适。
</p>

<h3>步骤3. 切红甘蓝</h3>
<p>
  将洗净的<strong>红甘蓝</strong>放在切菜板上，选择刀具，按照引导切碎甘蓝。
  将切好的红甘蓝放入<strong>紫色边框容器</strong>中。
</p>
<p>
  💡 <strong>提示：</strong>精确沿引导线切割，保证正确切碎。
</p>

<h3>步骤4. 切洋葱</h3>
<p>
  将洗净的<strong>洋葱</strong>放在切菜板上，选择刀具，按引导切片，外皮会自动剥离。
  将切好的洋葱放入<strong>粉色边框容器</strong>中。
</p>
<p>
  💡 <strong>提示：</strong>根据引导切割时会自动处理剥皮。
</p>

<h3>步骤5. 切番茄</h3>
<p>
  将洗净的<strong>番茄</strong>放在切菜板上，选择刀具，按引导切片。
  将切好的番茄放入粉色边框容器中。
</p>
<p>
  💡 <strong>提示：</strong>沿线条稳健切割，获得完美番茄片。
</p>

<h3>步骤6. 削皮并切胡萝卜</h3>
<p>
  将洗净的<strong>胡萝卜</strong>放在切菜板上，选择<strong>削皮器</strong>，沿胡萝卜表面拖动直到完全去皮。
  切换回刀具，按引导切丁。将切好的胡萝卜放入紫色边框容器中。
</p>
<p>
  💡 <strong>提示：</strong>切丁前确保胡萝卜完全去皮。
</p>

<h3>步骤7. 削皮并切鳄梨</h3>
<p>
  将洗净的<strong>鳄梨</strong>放在切菜板上，选择削皮器去皮。
  切换回刀具，按引导切片（核会自动去除）。将切好的鳄梨放入绿色容器中。
</p>
<p>
  💡 <strong>提示：</strong>先去皮更容易切片，按照引导操作。
</p>

<h3>步骤8. 混合沙拉</h3>
<p>
  画面切换到厨师水豚。将所有准备好的食材（切好的生菜、红甘蓝、洋葱、番茄、胡萝卜和鳄梨）
  从容器中放入大号<strong>紫色搅拌碗</strong>。用两把木制搅拌勺反复搅拌，直到进度条满。
</p>
<p>
  💡 <strong>提示：</strong>确保所有食材放入碗中后再开始搅拌，搅拌均匀。
</p>

<h3>步骤9. 装盘并淋酱</h3>
<p>
  在<strong>装盘盘子</strong>上铺好大块生菜叶作为底层。
  将混合好的沙拉从紫色搅拌碗倒在生菜叶上。选择<strong>沙拉酱瓶</strong>，以交叉图案均匀淋酱。
</p>
<p>
  💡 <strong>提示：</strong>用生菜叶做漂亮底层，均匀淋酱以获得最佳呈现效果。
</p>

<h2>Cookingdom 第4关小贴士</h2>
<ul>
  <li>✔️ 清洗蔬菜直到它们发光，确保干净。</li>
  <li>✔️ 仔细按照切割引导，获得正确的大小和形状。</li>
  <li>✔️ 记得先削胡萝卜和鳄梨的皮再切。</li>
  <li>✔️ 搅拌沙拉直到进度条完全满。</li>
  <li>✔️ 使用大块生菜叶作为装盘时的装饰和底层。</li>
  <li>✔️ 模仿交叉淋酱图案，获得最高呈现分数。</li>
</ul>

<h2>Cookingdom 第4关常见错误及避免方法</h2>
<ul>
  <li>未彻底清洗所有蔬菜。</li>
  <li>忘记削胡萝卜或鳄梨的皮。</li>
  <li>切割蔬菜时未按引导操作。</li>
  <li>搅拌碗内放入食材顺序错误（通常不扣分）。</li>
  <li>搅拌不充分，未将进度条填满。</li>
  <li>忘记先在盘子铺底生菜叶。</li>
  <li>未添加或随意淋沙拉酱。</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-5',
    title: 'Cookingdom 第5关 烤鱼攻略',
    pageTitle: 'Cookingdom 第5关 烤鱼攻略',
    pageSubtitle: '掌握Cookingdom第5关中烤鱼的技巧。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_05.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-5' },
    },
    iframeUrl: 'https://www.youtube.com/embed/x8l4-Iu40Ek',
    seo: {
      title: 'Cookingdom 第5关攻略：烤鱼 | 技巧与策略',
      description:
        '学习如何在Cookingdom第5关中完美烤鱼。获取控温、时间管理及顾客订单处理的实用技巧。',
      keywords: 'cookingdom, 第5关, 烤鱼, 攻略, 烧烤, 温度控制, 时间管理',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_05.webp',
      levelInfoHtml:
        '<h3>烤鱼</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 3分钟</p><p><strong>奖励：</strong> 4星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom 第4关 简单沙拉攻略',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-4' },
          },
        },
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom 第6关 咖啡浓缩攻略',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-6' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">游戏概述</h2>
<p>在Cookingdom中，每一关都会引入新的烹饪挑战。在第5关，玩家需要准备烤鱼。相比之前的关卡，烤鱼更需要精准把控时间和火候。你需要掌握烤鱼技巧，确保鱼肉恰到好处，及时为顾客端上美味佳肴，以保持他们的满意度。</p>
<p>随着游戏的推进，你将解锁更多技能，遇到更复杂的食谱和顾客需求。本关重点介绍烤制技巧，同时考验你在厨房中高效管理时间的能力。</p>

<h2 id="goal">第5关目标</h2>
<ul>
  <li><strong>烤制烤鱼：</strong> 学习如何将鱼烤制到完美状态。游戏提供了控制烤炉温度的工具，但你需要密切关注鱼的状态，避免烧焦或未熟。目标是将鱼烤得均匀，拥有理想的口感和风味。</li>
  <li><strong>控制火候：</strong> 烤鱼需要精准控制火力。烤制时间要足够使鱼外皮酥脆金黄，内部保持鲜嫩多汁。烤过头或不熟都会导致顾客不满。</li>
  <li><strong>高效服务顾客：</strong> 随着顾客增多，你需要同时处理多个订单。Cookingdom将考验你如何合理安排时间和优先级，确保每道菜都完美出炉。</li>
</ul>

<h2 id="steps">烤鱼步骤</h2>
<ol>
  <li>
    <h3>准备鱼：</h3>
    <p>首先，从食材区取鱼放到烤炉上。游戏中可能有不同种类的鱼，务必根据顾客要求选择正确的鱼类。</p>
    <p><strong>提示：</strong> 若顾客指定鱼的种类，要尽快准备以免延误。</p>
  </li>
  <li>
    <h3>给鱼调味：</h3>
    <p>鱼放到烤炉上后，添加适当的调味料。常见的有盐、胡椒，或根据顾客喜好添加其他香料。</p>
    <p><strong>提示：</strong> 适量调味能提升风味，调味过重会掩盖鱼的自然鲜味。</p>
  </li>
  <li>
    <h3>烤鱼：</h3>
    <p>观察烤炉中的鱼，精准控制烤制时间，确保鱼熟透但不过火。鱼皮应呈现金黄酥脆，内部保持多汁鲜嫩。</p>
    <p><strong>提示：</strong> 当鱼表面开始金黄或出现微泡时，就可以检查了。别等太久，否则鱼肉会变干。</p>
  </li>
  <li>
    <h3>端上菜：</h3>
    <p>鱼烤好后，取下放到盘子里。可以选择加柠檬片、香草或配菜来提升摆盘效果。</p>
    <p>及时上菜，避免因等待时间过长而降低顾客满意度。</p>
  </li>
</ol>

<h2 id="tips">技巧与建议</h2>
<ul>
  <li><strong>掌握烤制时间：</strong> 成功烤鱼的关键是时间把控。烤太久鱼会干硬，烤太短则不熟。注意鱼的金黄色泽和边缘起泡情况判断火候。</li>
  <li><strong>高效订单管理：</strong> 随着游戏进度加快，顾客会越来越多，合理安排订单优先级，提前准备食材，能帮你节省大量时间。</li>
  <li><strong>升级厨房设备：</strong> 随着游戏进展，你可以解锁和升级厨房设备。升级烤炉和其他烹饪设备可以加快烹饪速度，更好地应对大量订单。</li>
  <li><strong>使用加速道具：</strong> 某些关卡可使用加速或增益道具，帮助你更快烤鱼或准备食材，适合应对高峰期订单。</li>
  <li><strong>顾客满意度：</strong> Cookingdom的核心是满足顾客需求。上菜速度快、菜品完美，会提升评分和客户满意度。</li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom第5关的重点是烤鱼。关键在于控制火候和时间，确保鱼肉熟透且口感佳。你还需管理多个订单、升级厨房设备、合理使用道具，才能顺利通关。</p>
<p>完成本关后，你将解锁更多设备和新菜谱，进一步提升你的烹饪技能。不断提升烹饪与时间管理能力，才能在游戏中持续领先！</p>
`,
  },

  {
    id: 'cookingdom-game-level-6',
    title: 'Cookingdom 第6关 咖啡特浓通关攻略',
    pageTitle: 'Cookingdom 第6关 咖啡特浓通关攻略',
    pageSubtitle: '学习在 Cookingdom 第6关中冲煮完美的意式浓缩咖啡。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_06.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-6' },
    },
    iframeUrl: 'https://www.youtube.com/embed/jZaXNSTn1Ng',
    seo: {
      title: 'Cookingdom 第6关攻略：咖啡特浓 | 技巧与策略',
      description: '掌握在 Cookingdom 第6关中冲泡咖啡特浓的技巧。研磨、萃取时间、订单管理全指南。',
      keywords: 'cookingdom, 第6关, 咖啡特浓, 意式浓缩, 攻略, 咖啡, 冲煮, 时间管理',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_06.webp',
      levelInfoHtml:
        '<h3>咖啡特浓</h3><p><strong>难度：</strong>中等</p><p><strong>预计时间：</strong>1.5 分钟</p><p><strong>奖励：</strong>4 星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom 第5关 烤鱼通关攻略',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-5' },
          },
        },
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom 第7关 阳光煎蛋通关攻略',
          imageUrl: '/images/guides_07.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-7' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">关卡概览</h2>
<p>在 Cookingdom 中，每一关都会引入新的挑战和食谱。在第6关，你将学习如何制作咖啡特浓（Café Espresso），这是扩展咖啡馆菜单和提高顾客满意度的重要技能。本关的重点在于掌握浓缩咖啡的冲煮技术——这是后续关卡中各类咖啡饮品的核心。</p>
<p>随着关卡进度推进，你也将面对更复杂的顾客订单，需要同时处理多种饮品。现在是提升时间管理与效率的大好时机！</p>

<h2 id="goal">第6关目标</h2>
<ul>
  <li><strong>制作咖啡特浓：</strong>该关卡主要训练你冲煮完美的意式浓缩。过程虽然简单，但对精准度要求极高。你需要使用咖啡机，控制研磨程度，并确保注水量适中。</li>
  <li><strong>管理多个订单：</strong>随着顾客陆续点单，你需要同时处理多种饮品。这意味着在准备不同咖啡的同时，还要保持每一杯的品质。</li>
  <li><strong>快速精准出餐：</strong>浓缩咖啡的萃取时间短，必须尽快出杯。密切关注多个订单并迅速服务，是提高顾客满意度的关键。</li>
</ul>

<h2 id="steps">制作咖啡特浓的步骤</h2>
<ol>
  <li>
    <h3>研磨咖啡豆：</h3>
    <p>第一步是选择合适的咖啡豆并研磨。在游戏中可使用咖啡研磨机。浓缩咖啡需要较细的研磨度，确保调整到合适粗细。</p>
    <p><strong>提示：</strong>研磨太粗，咖啡会偏淡；太细，味道会过苦。</p>
  </li>
  <li>
    <h3>准备咖啡机：</h3>
    <p>研磨好后，将咖啡粉放入咖啡机的手柄中，均匀压实，以避免萃取不均。</p>
    <p><strong>提示：</strong>填实度均匀有助于萃取出风味平衡的浓缩咖啡。</p>
  </li>
  <li>
    <h3>开始冲煮：</h3>
    <p>将手柄装上咖啡机并启动萃取。机器会将热水高压通过咖啡粉，萃取出浓郁香醇的咖啡。</p>
    <p><strong>提示：</strong>注意控制冲煮时间，一般浓缩咖啡需约25-30秒。顶层应出现金色泡沫（crema）。</p>
  </li>
  <li>
    <h3>出杯并上桌：</h3>
    <p>萃取完成后，使用小杯盛装浓缩咖啡。在游戏中可选择添加装饰，如糖块或肉桂棒，但传统上是原味上桌。</p>
    <p><strong>提示：</strong>速度非常重要！浓缩咖啡准备时间短，务必及时上桌，以免让顾客等待太久。</p>
  </li>
</ol>

<h2 id="tips">技巧与建议</h2>
<ul>
  <li><strong>控制研磨度：</strong>咖啡粉的粗细会直接影响风味。确保研磨足够细以萃取出风味，又不至于阻塞水流。</li>
  <li><strong>掌握萃取时间：</strong>冲煮时间若低于25秒，口感可能偏淡；超过30秒，则可能过苦。时间是关键。</li>
  <li><strong>同时管理多个订单：</strong>随着客流增加，你将面对多个同时进行的订单。根据顾客耐心度与饮品复杂度排序处理任务。</li>
  <li><strong>升级设备：</strong>游戏中可升级咖啡机与研磨机，提高效率与饮品质量。投资更好设备可提升整体运营表现。</li>
  <li><strong>快速出餐提升满意度：</strong>顾客等待时间过长会影响评分。浓缩咖啡准备快，应尽快送达以获得高分与顾客满意度。</li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom 第6关的重点是掌握冲煮意式浓缩咖啡的流程：控制研磨度、萃取时间，以及快速出餐。随着顾客增多，你必须高效安排时间，多任务操作并灵活应对订单变化。</p>
<p>此关卡为后续复杂咖啡饮品打下基础。完成本关后，你将拥有扎实的咖啡制作技巧，准备好应对更高级的饮品挑战。</p>
`,
  },

  {
    id: 'cookingdom-game-level-7',
    title: 'Cookingdom 第7关 阳光煎蛋攻略',
    pageTitle: 'Cookingdom 第7关 阳光煎蛋攻略',
    pageSubtitle: '学习在第7关完美煎出阳光煎蛋。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_07.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-7' },
    },
    iframeUrl: 'https://www.youtube.com/embed/U06ryujgPy4',
    seo: {
      title: 'Cookingdom 第7关攻略：阳光煎蛋 | 技巧与策略',
      description: '掌握 Cookingdom 第7关的阳光煎蛋。掌控火候、避免破蛋黄、快速上菜的实用技巧。',
      keywords: 'cookingdom, 第7关, 阳光煎蛋, 攻略, sunny side up, 鸡蛋, 火候控制, 时间管理',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_07.webp',
      levelInfoHtml:
        '<h3>阳光煎蛋</h3><p><strong>难度：</strong>简单</p><p><strong>预计时间：</strong>1分钟</p><p><strong>奖励：</strong>3星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom 第6关 咖啡特浓攻略',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-6' },
          },
        },
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom 第8关 德州烧烤攻略',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-8' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">关卡概述</h2>
<p>在《Cookingdom》中，每一关都会带来新的烹饪挑战和菜品，考验你的厨艺与时间管理能力。第7关的重点是制作阳光煎蛋——这道看似简单但十分考验技巧的早餐料理，关键在于煎蛋时保持蛋黄完整。</p>
<p>这一关引入了更多的多任务操作需求，在处理多个订单的同时确保每一份煎蛋都完美无缺。别担心，只要方法得当，这一关你一定能轻松应对。现在让我们来看看煎出完美阳光蛋的步骤吧！</p>

<h2 id="goal">第7关目标</h2>
<ul>
    <li><strong>煎制阳光蛋：</strong>在 Cookingdom 中，阳光煎蛋是经典早餐。你的目标是保持蛋黄完整、蛋白熟透。掌控好火候才能取得高分。</li>
    <li><strong>高效管理多个订单：</strong>如同前几关，你需要同时处理多个订单。阳光煎蛋在本关中会是热门菜品，因此必须合理安排时间，确保准时上菜。</li>
    <li><strong>快速且精准地上菜：</strong>《Cookingdom》的顾客可没那么有耐心。他们要求煎蛋完美无瑕，既不能煎过头，也不能等太久。你的效率将直接影响评分。</li>
</ul>

<h2 id="steps">阳光煎蛋制作步骤</h2>
<ol>
    <li>
        <h3>预热锅具：</h3>
        <p>先把锅加热，再加入少量油或黄油防止鸡蛋粘锅。确保油分布均匀。</p>
        <p><strong>小贴士：</strong>使用不粘锅能有效避免蛋黄破裂。</p>
    </li>
    <li>
        <h3>打入鸡蛋：</h3>
        <p>小心地将鸡蛋打入锅中，注意不要弄破蛋黄。游戏会让你一个一个打蛋，请耐心操作，保持蛋黄完整。</p>
        <p><strong>小贴士：</strong>如果要煎多颗鸡蛋，务必保持间距，避免它们粘连。</p>
    </li>
    <li>
        <h3>开始煎蛋：</h3>
        <p>中火加热几分钟，直到蛋白完全凝固，蛋黄保持流心。关键是蛋白要熟而蛋黄不要过熟，中心应呈金黄色。</p>
        <p><strong>小贴士：</strong>不要翻面！阳光煎蛋只煎一面，翻面会导致蛋黄破裂。</p>
    </li>
    <li>
        <h3>装盘上菜：</h3>
        <p>煎好后，将鸡蛋轻轻滑入盘中。游戏中你可以根据顾客需求添加香草或配菜。</p>
        <p><strong>小贴士：</strong>煎好后立刻上菜，保持新鲜，避免顾客等太久而扣分。</p>
    </li>
</ol>

<h2 id="tips">技巧与建议</h2>
<ul>
    <li><strong>控制火候：</strong>火太大会让蛋白煎焦而蛋黄未熟，维持中火可煎出外熟内嫩的完美煎蛋。</li>
    <li><strong>别急躁：</strong>虽然煎蛋看起来简单，但如果操作太快会导致蛋黄破裂或过熟。放慢节奏，注重质量。</li>
    <li><strong>掌握多任务：</strong>你需要一边煎蛋一边处理其他菜品订单。合理安排优先级，别忘了时常查看锅里的蛋。</li>
    <li><strong>使用道具提升效率：</strong>随着游戏进度，你将解锁一些提升效率的道具，合理使用这些能让你更轻松应对多个订单。</li>
    <li><strong>追求顾客满意度：</strong>顾客满意是 Cookingdom 的核心。把握好火候、快速上菜，就能获得高评分和奖励。</li>
</ul>

<h2 id="summary">总结</h2>
<p>第7关的关键在于掌控火候，煎出外熟内嫩、蛋黄完整的阳光煎蛋，并在时间内上菜。你还需要在多任务中表现出色，同时兼顾其他订单。</p>
<p>一旦掌握技巧，这一关就不难通过。后续关卡将越来越复杂，而阳光煎蛋正是打好基础的关键。</p>
`,
  },

  {
    id: 'cookingdom-game-level-8',
    title: 'Cookingdom 第8关 德州烧烤攻略',
    pageTitle: 'Cookingdom 第8关 德州烧烤攻略',
    pageSubtitle: '学习如何在 Cookingdom 第8关完美烹饪牛排。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_08.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-8' },
    },
    iframeUrl: 'https://www.youtube.com/embed/qxPUF3cKPrs',
    seo: {
      title: 'Cookingdom 第8关攻略：牛排 | 技巧与策略',
      description:
        '掌握 Cookingdom 第8关牛排（嫩、五分熟、全熟）的烹饪技巧。时间控制、火候把握及订单管理提示。',
      keywords: 'cookingdom, 第8关, 牛排, 攻略, 烧烤, 煎制, 熟度, 嫩, 五分熟, 全熟, 时间管理',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_07.webp',
      levelInfoHtml:
        '<h3>牛排</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 3.5分钟</p><p><strong>奖励：</strong> 5星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom 第7关 晴蛋攻略',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-7' },
          },
        },
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom 第9关 意大利面攻略',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-9' },
          },
        },
      ],
    },
    detailsHtml: `
    <h2>欢迎来到 Cookingdom 第8关：德州烧烤（Texas BBQ）攻略与指南</h2>
<p>
  欢迎来到 <strong>Cookingdom 第8关</strong>，你的任务是使用正确的工具、顺序和时机，制作出完美的<strong>德州烧烤（Texas BBQ）</strong>。
  本关卡让玩家在轻松无计时的环境下，体验 Cookingdom 直观而精准的烹饪机制。
</p>
<p>
  本攻略为你详细说明如何成功完成 <strong>Cookingdom 第8关</strong>，涵盖每一种食材、操作步骤和摆放方式。
</p>

<h2>所需食材</h2>
<table>
  <thead>
    <tr>
      <th>食材</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>猪肋排</td>
      <td>1排（4块肋排）</td>
      <td>通过野猪小游戏用胡萝卜获得。</td>
    </tr>
    <tr>
      <td>厨房纸巾</td>
      <td>1卷</td>
      <td>用于擦干肋排表面。</td>
    </tr>
    <tr>
      <td>红色调味料（辣椒粉/甜椒粉）</td>
      <td>1瓶</td>
      <td>擦干并切割肋排后撒上。</td>
    </tr>
    <tr>
      <td>盐</td>
      <td>1瓶</td>
      <td>在红色调味料之后撒在肋排上。</td>
    </tr>
    <tr>
      <td>大蒜</td>
      <td>1头</td>
      <td>去皮切碎，制作烧烤酱用。</td>
    </tr>
    <tr>
      <td>葱</td>
      <td>1把</td>
      <td>切碎，用于烧烤酱。</td>
    </tr>
    <tr>
      <td>黄油</td>
      <td>1块</td>
      <td>用来在锅中开始制作酱汁。</td>
    </tr>
    <tr>
      <td>糖</td>
      <td>1碗</td>
      <td>加入烧烤酱中。</td>
    </tr>
    <tr>
      <td>红色酱汁基底（番茄酱/烧烤酱基底）</td>
      <td>1碗</td>
      <td>烧烤酱的主要液体成分。</td>
    </tr>
    <tr>
      <td>沙拉混合料</td>
      <td>1碗</td>
      <td>最后摆盘用。</td>
    </tr>
    <tr>
      <td>沙拉酱</td>
      <td>1碗</td>
      <td>用于沙拉调味。</td>
    </tr>
    <tr>
      <td>煎蛋</td>
      <td>1个</td>
      <td>摆盘用配菜。</td>
    </tr>
    <tr>
      <td>烹制好的烧烤酱</td>
      <td>1碗</td>
      <td>用于刷烤肋排及最后摆盘。</td>
    </tr>
    <tr>
      <td>胡萝卜</td>
      <td>1根</td>
      <td>仅用于野猪小游戏。</td>
    </tr>
  </tbody>
</table>

<h2>德州烧烤详细步骤攻略</h2>

<h3>步骤1：收集野猪肉（小游戏）</h3>
<p>
  在户外场景等待<b>兔子</b>带着<b>胡萝卜</b>出现。将胡萝卜拖到藏在灌木丛中的<b>野猪</b>身边。
  野猪会吃胡萝卜并跑开，留下肉作为食材。
</p>
<p>
  💡 <strong>提示：</strong>兔子带来胡萝卜时要迅速拖动胡萝卜给野猪。
</p>

<h3>步骤2：准备肋排</h3>
<p>
  将<b>肋排</b>放在<b>切菜板</b>上。用<b>厨房纸巾</b>在标记的三个区域擦干肋排。
  选用<b>刀具</b>，按照引导在肋骨间垂直切割（三刀）。
  撒上<b>红色调味料</b>，然后撒<b>盐</b>。
</p>
<p>
  💡 <strong>提示：</strong>确保擦干所有标记点，切割准确，调味均匀。
</p>

<h3>步骤3：准备香料</h3>
<p>
  将<b>大蒜</b>放在空切菜板上，连续点击分开蒜瓣。选刀将蒜瓣切碎，放置一旁。
  将<b>葱</b>放上切菜板，选刀快速切碎白色和绿色部分。
</p>
<p>
  💡 <strong>提示：</strong>多次点击加快切碎速度。
</p>

<h3>步骤4：制作烧烤酱</h3>
<p>
  打开<b>电磁炉</b>，放上<b>锅</b>。加入<b>黄油</b>融化。
  加入切碎的大蒜快速翻炒。用勺子从碗中取糖加入，搅拌均匀。
  再加入红色酱汁基底并搅拌。加入葱花，继续搅拌直至酱汁沸腾。
</p>
<p>
  💡 <strong>提示：</strong>按正确顺序添加食材，每次添加后搅拌均匀。
</p>

<h3>步骤5：烤制肋排</h3>
<p>
  将<b>烤盘</b>放在炉上。把调味好的肋排放在热烤盘上。
  用勺子取适量烧烤酱，反复涂抹在肋排上进行刷烤。
</p>
<p>
  💡 <strong>提示：</strong>确保肋排每块都反复刷酱，直到形成漂亮的光泽。等待爱心确认。
</p>

<h3>步骤6：摆盘德州烧烤</h3>
<p>
  空盘上先放入<b>沙拉混合料</b>，用勺子淋上<b>沙拉酱</b>调味。
  将烤好的肋排摆在沙拉旁，煎蛋放置肋排边上。
  最后用勺子将剩余烧烤酱淋在肋排上。
</p>
<p>
  💡 <strong>提示：</strong>整齐摆放所有配料，参考最终成品图以获得最佳评分。
</p>

<h2>Cookingdom 第8关小贴士与技巧</h2>
<ul>
  <li>✔️ 小游戏环节需要迅速操作胡萝卜。</li>
  <li>✔️ 肋排擦干、切割和调味要准确。</li>
  <li>✔️ 烹制酱汁时严格按照顺序添加食材。</li>
  <li>✔️ 烤制过程中多次刷酱，形成漂亮光泽。</li>
  <li>✔️ 摆盘整齐，有助于获得高分。</li>
</ul>

<h2>Cookingdom 第8关常见错误避免</h2>
<ul>
  <li>错过野猪小游戏的最佳时机。</li>
  <li>忘记擦干肋排或切割不准确。</li>
  <li>烧烤酱食材顺序错乱或未搅拌均匀。</li>
  <li>烤制时刷酱不足。</li>
  <li>摆盘混乱，影响评分。</li>
</ul>

  `,
  },

  {
    id: 'cookingdom-game-level-9',
    title: 'Cookingdom 第9关 意大利面攻略',
    pageTitle: 'Cookingdom 第9关 意大利面攻略',
    pageSubtitle: '掌握烹饪完美意大利面的技巧，轻松过关第9关。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_09.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-9' },
    },
    iframeUrl: 'https://www.youtube.com/embed/tZMPN2bgwZo',
    seo: {
      title: 'Cookingdom 第9关攻略：意大利面 | 贴士与策略',
      description:
        '学习如何烹饪完美的意大利面（al dente）及正确的酱汁制作技巧。掌握时间管理与多任务处理。',
      keywords: 'cookingdom, 第9关, 意大利面, 攻略, 意面, 酱汁, al dente, 时间管理, 多任务',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_09.webp',
      levelInfoHtml:
        '<h3>意大利面</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 2.5 分钟</p><p><strong>奖励：</strong> 5 星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom 第8关 德州烤肉攻略',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-8' },
          },
        },
        {
          id: 'cookingdom-game-level-10',
          title: 'Cookingdom 第10关 三文鱼寿司攻略',
          imageUrl: '/images/guides_10.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-10' },
          },
        },
      ],
    },
    detailsHtml: `
<h2>欢迎来到 Cookingdom Level 9: 意大利面攻略与指南</h2>
<p>
  欢迎，未来的大厨！在<strong>Cookingdom Level 9</strong>中，您的烹饪挑战是完美制作一道美味的<strong>意大利面</strong>。这个关卡旨在帮助您熟悉 Cookingdom 精确的烹饪机制，并在一个平静、无时间压力的环境中进行操作。
</p>
<p>
  本攻略将详细列出您在完成<strong>Cookingdom Level 9</strong>时需要遵循的步骤，详细描述每种食材、动作和精确的摆放。
</p>

<h2>完美意大利面所需的食材</h2>
<table>
  <thead>
    <tr>
      <th>食材</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>干意大利面</td>
      <td>1份</td>
      <td>生的意大利面条。</td>
    </tr>
    <tr>
      <td>水</td>
      <td>1碗</td>
      <td>用于煮意大利面。</td>
    </tr>
    <tr>
      <td>盐</td>
      <td>1瓶</td>
      <td>用于调味煮意大利面的水。</td>
    </tr>
    <tr>
      <td>番茄</td>
      <td>1碗</td>
      <td>整颗番茄，用来切丁做酱料和切片做装饰。</td>
    </tr>
    <tr>
      <td>洋葱</td>
      <td>1碗</td>
      <td>整颗洋葱，切丁用于做酱料。</td>
    </tr>
    <tr>
      <td>罗勒叶</td>
      <td>1碗</td>
      <td>新鲜的，用于最后的装饰。</td>
    </tr>
    <tr>
      <td>肉末</td>
      <td>1碗</td>
      <td>用于制作浓郁的博洛尼亚酱。</td>
    </tr>
    <tr>
      <td>油/黄油</td>
      <td>1碗</td>
      <td>用于开始制作酱料。</td>
    </tr>
    <tr>
      <td>胡椒粉</td>
      <td>1瓶</td>
      <td>用于调味酱料。</td>
    </tr>
    <tr>
      <td>番茄酱底料</td>
      <td>1瓶</td>
      <td>浓缩的番茄基底，用于制作博洛尼亚酱。</td>
    </tr>
    <tr>
      <td>刨花奶酪</td>
      <td>1碗</td>
      <td>通常为帕尔马干酪，用来撒在意大利面上。</td>
    </tr>
    <tr>
      <td>奶油酱料</td>
      <td>1瓶</td>
      <td>用于摆盘时添加的白色酱料。</td>
    </tr>
  </tbody>
</table>

<h2>意大利面制作攻略：逐步指南</h2>

<h3>步骤 1. 将水烧开并加盐</h3>
<p>
  首先，启动<strong>热板</strong>。将<strong>水</strong>从碗中倒入<strong>锅中</strong>。看到水开始沸腾（有很多气泡）时，加入<strong>盐</strong>。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>不要着急！确保水完全沸腾后再加入盐或意大利面，这对正确烹饪至关重要。
</div>

<h3>步骤 2. 将意大利面煮至“Al Dente”</h3>
<p>
  现在，小心地将<strong>干意大利面条</strong>放入沸腾的加盐水中。耐心等待，直到意大利面完全煮熟。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>意大利面会自行变软并沉入水底。留意动画效果——当出现闪光时，表示它已经煮熟！
</div>

<h3>步骤 3. 排水并捞出煮好的意大利面</h3>
<p>
  拿起<strong>漏网工具</strong>。小心地将煮熟的意大利面从锅中捞出，直接放入指定的<strong>盛盘</strong>中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>确保每根意大利面都被捞出，不能有遗漏！
</div>

<h3>步骤 4. 精确切丁番茄</h3>
<p>
  将<strong>整颗番茄</strong>放到<strong>切菜板</strong>上。选择<strong>刀具</strong>，按照屏幕上的引导先切片，再切丁。将切好的番茄丁放回原碗中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>按照游戏中的引导精确切丁对获得高分非常重要！花时间在这里。
</div>

<h3>步骤 5. 小心切丁洋葱</h3>
<p>
  将<strong>洋葱</strong>放到<strong>切菜板</strong>上。使用<strong>刀具</strong>，根据屏幕上的引导切片再切丁。将切好的洋葱放回碗中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>切菜时保持刀工精细，能确保食材均匀熟透。
</div>

<h3>步骤 6. 开始制作博洛尼亚酱</h3>
<p>
  将干净的<strong>锅</strong>放到<strong>热板</strong>上。加入<strong>油/黄油</strong>，然后撒入一些<strong>胡椒粉</strong>。接着，加入之前切好的<strong>番茄和洋葱</strong>。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>让油或黄油稍微加热一下，再放入蔬菜，这样能更好地释放香味。
</div>

<h3>步骤 7. 炒蔬菜并煮肉</h3>
<p>
  使用<strong>汤勺</strong>搅拌锅中的番茄和洋葱。然后加入<strong>肉末</strong>。不断搅拌，直到肉末变色并完全熟透。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>频繁搅拌！这样可以防止食材粘锅，确保肉末均匀熟透。
</div>

<h3>步骤 8. 慢炖浓郁的酱料</h3>
<p>
  将<strong>番茄酱底料</strong>从瓶子中倒入锅中，与煮好的肉和蔬菜混合。用<strong>汤勺</strong>搅拌均匀，让酱料慢慢炖煮至浓稠。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>酱料会在慢炖过程中稍微变稠。当出现闪光效果时，表示酱料已经做好！
</div>

<h3>步骤 9. 装盘意大利面和酱料</h3>
<p>
  将煮好的意大利面放入盛盘中，使用<strong>汤勺</strong>将新鲜制作的<strong>博洛尼亚酱</strong>淋在意大利面上。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>确保美味的酱料均匀覆盖整个意大利面。
</div>

<h3>步骤 10. 精美装饰完成大作</h3>
<p>
  小心地将<strong>番茄切片装饰</strong>环绕在意大利面外围。将<strong>奶油酱</strong>放在中央。最后，撒上<strong>刨花奶酪</strong>，并放上新鲜的<strong>罗勒叶</strong>作为最后的点缀。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>按照屏幕上的视觉引导精确摆放每个装饰，这对获得三颗星的“味觉爆炸”评分至关重要。
</div>

<h2>Cookingdom Level 9 成功的顶级小贴士</h2>
<ul>
  <li>
    ✔️ **留意视觉和声音提示**，如闪光和铃声，它们告诉你什么时候烹饪过程（如意大利面和酱料）完成。
  </li>
  <li>
    ✔️ **精准切丁**蔬菜和**准确摆放**最终的装饰对评分至关重要。
  </li>
  <li>
    ✔️ 在每个阶段**持续搅拌博洛尼亚酱**，尤其是在加入肉末和番茄酱底料后，确保食材完美融合。
  </li>
  <li>
    ✔️ 严格按照游戏中每个步骤的**操作顺序**进行，以避免出错。
  </li>
</ul>

<h2>Cookingdom Level 9 常见错误</h2>
<ul>
  <li>没有等水完全烧开就加入意大利面。</li>
  <li>在完成提示（闪光效果）之前就拿出意大利面或酱料。</li>
  <li>番茄和洋葱切丁不准确或过于粗糙。</li>
  <li>肉末煮不均匀，未充分搅拌。</li>
  <li>最终装盘时摆放不准确，或缺少装饰。</li>
</ul>

`,
  },

  {
    id: 'cookingdom-game-level-10',
    title: 'Cookingdom 第10关 三文鱼寿司攻略',
    pageTitle: 'Cookingdom 第10关 三文鱼寿司攻略',
    pageSubtitle: '学习如何在Cookingdom第10关制作完美的三文鱼寿司。',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_10.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-10' },
    },
    iframeUrl: 'https://www.youtube.com/embed/Z6UgpR3Z8CI',
    seo: {
      title: 'Cookingdom 第10关攻略：三文鱼寿司 | cookingdom.co',
      description: '掌握Cookingdom第10关的三文鱼寿司。完美米饭、切鱼、卷寿司及摆盘技巧。',
      keywords: 'cookingdom 第10关, cookingdom 三文鱼寿司, 寿司攻略, 寿司米, 切鱼技巧, 游戏攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_10.webp',
      levelInfoHtml:
        '<h3>Cookingdom 第10关 三文鱼寿司</h3><p><strong>难度：</strong> 困难</p><p><strong>预计时间：</strong> 4.5分钟</p><p><strong>奖励：</strong> 5星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom 第9关 意大利面攻略',
          imageUrl: '/images/guides_09.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-9' },
          },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom 第11关 爆米花攻略',
          imageUrl: '/images/guides_11.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-11' },
          },
        },
      ],
    },
    detailsHtml: `
<h2>欢迎来到 Cookingdom 第 10 关：三文鱼寿司攻略与指南</h2>
<p>
  欢迎，寿司艺术家！在 **Cookingdom 第 10 关**，你的任务是制作精美的 **三文鱼寿司**。这一关将温和地向你介绍 Cookingdom 中精准且富有艺术感的烹饪机制，且不设时限。
</p>
<p>
  本攻略将一步步引导你完成 Cookingdom 第 10 关，详细介绍每一个食材、操作和准确的摆放。
</p>

<h2>制作寿司所需的食材</h2>
<table>
  <thead>
    <tr>
      <th>食材</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>鱼</td>
      <td>5 条</td>
      <td>通过初始捕鱼迷你游戏捕获的各种类型的鱼，避免捕到垃圾！</td>
    </tr>
    <tr>
      <td>米饭</td>
      <td>1 碗</td>
      <td>需要先在锅中用水清洗，再用电饭煲煮熟。</td>
    </tr>
    <tr>
      <td>水</td>
      <td>适量</td>
      <td>用于清洗米饭和煮饭。</td>
    </tr>
    <tr>
      <td>胡萝卜</td>
      <td>1 根</td>
      <td>需要削皮，然后切成细条（切成丝）。</td>
    </tr>
    <tr>
      <td>鳄梨</td>
      <td>1 个</td>
      <td>需要削皮（使用刀具），然后精准切片。</td>
    </tr>
    <tr>
      <td>黄瓜</td>
      <td>1 根</td>
      <td>需要削皮（使用刀具），然后切成细条。</td>
    </tr>
    <tr>
      <td>三文鱼</td>
      <td>1 份（切片）</td>
      <td>已切片，但需要进一步切成薄条用于做寿司填料。</td>
    </tr>
    <tr>
      <td>海苔（紫菜）</td>
      <td>3 片</td>
      <td>做寿司卷的必要包裹材料。</td>
    </tr>
    <tr>
      <td>芥末</td>
      <td>1 份</td>
      <td>适量用于寿司卷内（可选），并可在上菜时加一小团。</td>
    </tr>
    <tr>
      <td>腌姜（甘草）</td>
      <td>1 份</td>
      <td>与寿司一起摆盘上桌。</td>
    </tr>
    <tr>
      <td>香菜/装饰</td>
      <td>1 串</td>
      <td>为盘子添加装饰性点缀。</td>
    </tr>
    <tr>
      <td>削皮器</td>
      <td>1 个</td>
      <td>专门用来削胡萝卜皮。</td>
    </tr>
    <tr>
      <td>刀具</td>
      <td>1 把</td>
      <td>用于削皮、切片、切条和切成寿司卷。</td>
    </tr>
    <tr>
      <td>砧板</td>
      <td>2 块</td>
      <td>一块用于食材准备，另一块用于清洁的寿司卷切割。</td>
    </tr>
    <tr>
      <td>锅</td>
      <td>1 个</td>
      <td>用于清洗米饭并转移到电饭煲中。</td>
    </tr>
    <tr>
      <td>电饭煲</td>
      <td>1 个</td>
      <td>用来煮熟米饭。</td>
    </tr>
    <tr>
      <td>水槽与水龙头</td>
      <td>1 个</td>
      <td>用于彻底清洗米饭。</td>
    </tr>
    <tr>
      <td>竹帘（Makisu）</td>
      <td>1 个</td>
      <td>用来紧密卷寿司的必备工具。</td>
    </tr>
    <tr>
      <td>容器</td>
      <td>多个</td>
      <td>用于暂时存放准备好的食材和完成的寿司卷。</td>
    </tr>
    <tr>
      <td>上菜盘</td>
      <td>1 个（黑色矩形盘）</td>
      <td>为最终寿司呈现提供优雅的舞台。</td>
    </tr>
    <tr>
      <td>小碗/盘</td>
      <td>2 个</td>
      <td>用于盛放芥末和腌姜。</td>
    </tr>
  </tbody>
</table>

<h2>三文鱼寿司大师级指南：一步步教程</h2>

<h3>步骤 1. 捕鱼迷你游戏</h3>
<p>
  进入水下场景，扮演水豚大厨。你的目标是捕获 **5 条鱼**，可以是任何种类的鱼。小心避开 **所有垃圾物品**，如塑料瓶、玻璃瓶和罐子。捕获完所有 5 条鱼后，它们会自动转移到你的船上。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>策略性地规划游泳路径，快速捕到鱼的同时避免垃圾。
</div>

<h3>步骤 2. 完美煮熟米饭</h3>
<p>
  将 **米饭** 倒入金属 **锅中**，然后将锅移至 **水槽水龙头**，加入足够的 **水** 来清洗米饭。接着，将锅（连同米饭和水）放入 **电饭煲** 中，盖上盖子，电饭煲会自动开始，显示灯光和蒸汽。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>不要忘记在将锅放入电饭煲前加水，这样才能正确清洗并煮熟米饭。
</div>

<h3>步骤 3. 准备胡萝卜</h3>
<p>
  将 **胡萝卜** 放在 **砧板** 上，使用 **削皮器** 去除胡萝卜皮，并丢弃皮。然后换用 **刀具**，按照屏幕上的提示将胡萝卜切成细长条（丝）。最后，将切好的胡萝卜放入一个 **容器** 中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>确保胡萝卜被彻底削皮，再根据指导切成精确的条状。
</div>

<h3>步骤 4. 准备鳄梨</h3>
<p>
  将 **鳄梨** 放在 **砧板** 上，使用 **刀具** 切开（果核会自动去除）。然后使用 **刀具**（此时刀具充当削皮工具）小心地将鳄梨皮去除，丢弃皮。根据提示将鳄梨果肉切成薄片，并将切片放入 **容器** 中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>游戏会使用刀具来削皮，只需根据提示小心操作！
</div>

<h3>步骤 5. 准备黄瓜</h3>
<p>
  将 **黄瓜** 放在 **砧板** 上，使用 **刀具**（同样作为削皮工具）将皮去掉，然后丢弃皮。接着，换回 **刀具**，按照指导将黄瓜切成细长条（丝）。将切好的黄瓜放入 **容器** 中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>在切黄瓜条之前，确保将皮完全去除。
</div>

<h3>步骤 6. 准备三文鱼条</h3>
<p>
  将 **已切好的三文鱼** 放在 **砧板** 上，使用 **刀具**，根据指导将这些切片切成更薄的条，完美用于做寿司填料。将切好的三文鱼条放入 **容器** 中。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>沿着提示的线条精确切割，以确保三文鱼条均匀。
</div>

<h3>步骤 7. 取出煮熟的米饭</h3>
<p>
  打开 **电饭煲盖**，取出包含煮熟米饭的锅。将锅放在准备台面上。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>米饭应该是热腾腾的，这表明它已经煮熟并准备好进行卷制。
</div>

<h3>步骤 8. 卷寿司（三次！）</h3>
<p>
  将一片 **海苔** 放在 **竹帘** 上。取适量已煮熟的 **米饭**，均匀地铺在海苔上，记得在最远的一边留一点空隙。你可以选择在米饭上方横向涂上一薄层 **芥末**。然后将准备好的 **黄瓜、胡萝卜、鳄梨和三文鱼** 条均匀地放在米饭上，尽量靠近底边。小心地提起竹帘的一边，将海苔和食材卷紧，直到形成一个圆柱形。将做好的寿司卷放到 **容器** 中。你需要 **重复整个过程，做出三卷寿司**。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>将米饭均匀且薄薄地铺开，使用竹帘卷紧，以确保卷好的寿司紧实不散。
</div>

<h3>步骤 9. 精准切割寿司卷</h3>
<p>
  将做好的寿司卷放在 **干净的砧板** 上。使用 **刀具**，按照切割指导将寿司卷切成几个（总共 4 片）均等的部分。对剩下的两卷重复此过程。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>使用锋利的刀具，保持精准且干净的切割。确保所有寿司片的厚度均匀。
</div>

<h3>步骤 10. 精致寿司摆盘</h3>
<p>
  将切好的寿司块整齐地摆放在 **黑色上菜盘** 上（总共应有 12 片）。将准备好的 **芥末** 放在盘子上。接着，将 **腌姜（甘草）** 放在盘子上。最后，添加一枝 **香菜/装饰** 作为装饰点缀。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>将寿司块摆放整齐，并将调味料和装饰品精确放置，如同游戏中的最终画面。
</div>

<h2>Cookingdom 第 10 关成功的顶级技巧</h2>
<ul>
  <li>
    ✔️ 在捕鱼迷你游戏中，优先避免垃圾，而非追求速度；清洁的鱼是关键。
  </li>
  <li>
    ✔️ 确保米饭 **清洗和煮熟** 后再开始卷寿司。
  </li>
  <li>
    ✔️ **准确遵循每个食材的削皮和切割指导**。
  </li>
  <li>
    ✔️ 在海苔上铺米饭时，**上边留小空白**，帮助卷好寿司。
  </li>
  <li>
    ✔️ 使用竹帘 **卷紧寿司**，确保寿司成型不散开。
  </li>
  <li>
    ✔️ 使用 **干净的刀具**，切割时要平稳、干净。
  </li>
  <li>
    ✔️ **整齐且吸引人的摆盘**，按游戏中的示范呈现。
  </li>
</ul>

<h2>Cookingdom 第 10 关常见错误</h2>
<ul>
  <li>捕鱼迷你游戏中击中垃圾物品。</li>
  <li>忘记清洗米饭或米饭煮得不当。</li>
  <li>胡萝卜/黄瓜/鳄梨未削皮，或切割时未准确跟随指导。</li>
  <li>米饭铺得太厚或不均匀。</li>
  <li>寿司卷过松，导致食材掉出。</li>
  <li>切寿司卷时不均匀或刀工不整齐。</li>
  <li>摆盘时忘记加芥末、腌姜或装饰，或摆放不当。</li>
</ul>

  `,
  },
]
