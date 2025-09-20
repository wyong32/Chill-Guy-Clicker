export const levels21to30 = [
  {
    id: 'cookingdom-game-level-21',
    title: 'Cookingdom第21关 珍珠奶茶攻略',
    pageTitle: 'Cookingdom第21关 珍珠奶茶攻略',
    pageSubtitle: '学习如何在Cookingdom第21关制作完美的珍珠奶茶。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: true,
    imageUrl: '/images/guides_21.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
    iframeUrl: 'https://www.youtube.com/embed/Gx6cF0wkSek',
    seo: {
      title: 'Cookingdom第21关指南：珍珠奶茶 | cookingdom.co',
      description:
        '掌握Cookingdom第21关的珍珠奶茶制作技巧。学习煮珍珠、泡茶、调配奶量和平衡甜度，制作时尚饮品。',
      keywords: 'Cookingdom第21关, 珍珠奶茶, 波霸奶茶, 台湾饮品, 茶饮指南',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_21.webp',
      levelInfoHtml:
        '<h3>珍珠奶茶</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 3分钟</p><p><strong>奖励：</strong> 5星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-20',
          title: 'Cookingdom第20关 烤火鸡攻略',
          imageUrl: '/images/guides_20.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-20' } },
        },
        {
          id: 'cookingdom-game-level-22',
          title: 'Cookingdom第22关 简易果昔攻略',
          imageUrl: '/images/guides_22.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
        },
      ],
    },
    detailsHtml: `
<h2>欢迎来到Cookingdom第21关：珍珠奶茶攻略与指南</h2>
<p>
  欢迎，泡泡茶爱好者！在**Cookingdom第21关**中，您的任务是制作完美的**珍珠奶茶**。这一关通过Cookingdom的直观而精确的烹饪机制，在一个轻松无计时的环境中，帮助您掌握这一受欢迎的饮品。
</p>
<p>
  本攻略将为您提供征服**Cookingdom第21关**的精确步骤，详细说明每个成分、动作和精确的放置要求，以制作一杯美味的珍珠奶茶。
</p>

<h2>您需要的珍珠奶茶材料</h2>
<table>
  <thead>
    <tr>
      <th>材料</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>新鲜绿茶叶</td>
      <td>多量</td>
      <td>从茶盆中挑选而来。</td>
    </tr>
    <tr>
      <td>枯萎/褐色茶叶</td>
      <td>多量</td>
      <td>这些茶叶在挑选过程中需要丢弃。</td>
    </tr>
    <tr>
      <td>水</td>
      <td>1壶</td>
      <td>用于制作糖浆和煮珍珠。</td>
    </tr>
    <tr>
      <td>红糖</td>
      <td>1碗</td>
      <td>制作浓厚糖浆的必备材料。</td>
    </tr>
    <tr>
      <td>预制的珍珠粉球</td>
      <td>1碗</td>
      <td>白色的小球，先在糖浆中煮熟。</td>
    </tr>
    <tr>
      <td>煮熟的珍珠面团</td>
      <td>1碗</td>
      <td>奶油状的面团，用来制作新鲜珍珠。</td>
    </tr>
    <tr>
      <td>珍珠淀粉/面粉</td>
      <td>撒上</td>
      <td>用于防止在制作珍珠时粘连。</td>
    </tr>
    <tr>
      <td>牛奶</td>
      <td>1盒</td>
      <td>奶茶的浓郁基底。</td>
    </tr>
    <tr>
      <td>干黑茶叶</td>
      <td>1罐</td>
      <td>用于冲泡奶茶底。</td>
    </tr>
    <tr>
      <td>煮熟的珍珠糖浆</td>
      <td>1碗</td>
      <td>煮熟的珍珠，作为奶茶的配料。</td>
    </tr>
    <tr>
      <td>冰块</td>
      <td>1碗</td>
      <td>加入冷却完成的饮品。</td>
    </tr>
    <tr>
      <td>绿果冻块</td>
      <td>1盘</td>
      <td>作为颜色鲜艳且富有口感的配料。</td>
    </tr>
    <tr>
      <td>黄芒果/布丁块</td>
      <td>1盘</td>
      <td>另一种美味且视觉吸引的配料。</td>
    </tr>
    <tr>
      <td>奶油泡沫顶层</td>
      <td>1份</td>
      <td>带有樱桃和糖果撒花的红色漩涡，用于装饰。</td>
    </tr>
    <tr>
      <td>团子串</td>
      <td>1串</td>
      <td>三颗甜球在一根棒子上，作为装饰。</td>
    </tr>
    <tr>
      <td>塑料杯</td>
      <td>1</td>
      <td>装盛珍珠奶茶的容器。</td>
    </tr>
    <tr>
      <td>珍珠吸管</td>
      <td>1</td>
      <td>宽口、粉色条纹吸管，适合珍珠奶茶。</td>
    </tr>
  </tbody>
</table>

<h2>珍珠奶茶制作技巧：一步步指南</h2>

<h3>步骤 1. 挑选茶叶</h3>
<p>
  观察三个茶盆。将**健康、鲜绿的茶叶**拖动到左边的篮子中（标有绿色勾选）。将任何**枯萎、褐色或有孔的茶叶**拖到右边的篮子中（标有红色叉号）。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 在挑选时要迅速而准确。一旦所有茶叶正确挑选，心形图标会出现。
</div>

<h3>步骤 2. 准备红糖糖浆</h3>
<p>
  将**水**从壶中倒入放在热板上的锅中。使用**勺子**舀取**红糖**，加入锅中。打开热板（计时器开始启动），等待糖浆变浓，直到它变成浓稠的糖浆。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 耐心等待热板上的计时器完成，确保糖浆达到适当的浓度。
</div>

<h3>步骤 3. 烹饪初步珍珠</h3>
<p>
  将碗中的**白色珍珠淀粉球**放入正在炖煮的红糖糖浆中。用**勺子**搅拌。继续加热直到珍珠变成深褐色并完全煮熟（通过计时器完成和视觉变化来确认）。将煮熟的珍珠和糖浆舀入另一个小碗中。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 持续搅拌有助于珍珠均匀煮熟。密切关注计时器。心形图标确认完成。
</div>

<h3>步骤 4. 制作新鲜珍珠</h3>
<p>
  将**煮熟的珍珠面团**（奶油状的旋涡）放在切菜板上。撒上**珍珠淀粉/面粉**以防粘连。使用**擀面杖**将面团擀成长方形。用**刀**将长方形切成小方块。最后，用手指将每个方块滚成小而圆的珍珠。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 均匀滚动面团，制作均匀的珍珠。确保每个小方块都被滚成圆球。
</div>

<h3>步骤 5. 烹饪新鲜珍珠</h3>
<p>
  将**水**倒入热板上的锅中，煮沸。将新鲜滚好的**珍珠**放入滚水中。搅拌。等待珍珠煮熟（计时器会完成）。使用**漏勺**将煮熟的珍珠从水中捞出，并放入之前准备的红糖糖浆碗中。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 在加入珍珠之前，确保水已经沸腾。心形图标会显示成功转移。
</div>

<h3>步骤 6. 冲泡奶茶基底</h3>
<p>
  将**牛奶**从盒子中倒入热板上的锅中。将**金属滤网**放在锅上。将**干黑茶叶**从罐中加入滤网中。同时，将您挑选好的**新鲜绿茶叶**加入滤网。开启加热（计时器开始），让茶叶在牛奶中慢慢浸泡。浸泡完成后，移开滤网，并使用**长柄勺**将泡好的奶茶转移到空碗中。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 等待泡茶计时器完成。心形图标会显示成功冲泡。
</div>

<h3>步骤 7. 组装珍珠奶茶</h3>
<p>
  将空的**塑料杯**放置在工作台上。将泡好的**奶茶**从壶中倒入杯中。用**漏勺**加入一勺**红糖糖浆中的煮珍珠**。加入碗中的**冰块**。加入盘中的**绿果冻块**。加入盘中的**黄芒果/布丁块**。加入**奶油泡沫顶层**。最后，插入宽口粉色的**珍珠吸管**。
</p>
<div class="tip">
  💡 <strong>技巧：</strong> 按照成分添加的顺序进行组装，确保所有配料都加入，才是完整的饮品。
</div>

<h2>Cookingdom第21关成功技巧</h2>
<ul>
  <li>✔️ 密切注意热板上的**计时器**，确保每个烹饪步骤（从糖浆、珍珠到奶茶冲泡）都完成。</li>
  <li>✔️ **准确性**至关重要，特别是在挑选茶叶和制作新鲜珍珠时（切割和滚动）。</li>
  <li>✔️ 按照**特定顺序**组装饮品，层次顺序会影响最终的味道和展示效果。</li>
  <li>✔️ 每个成功的关键步骤都会通过心形弹出框确认，所以请注意这些提示！</li>
</ul>

<h2>Cookingdom第21关常见错误及避免方式</h2>
<ul>
  <li>错误地挑选茶叶（例如，把好叶和坏叶混在一起）。</li>
  <li>烧焦红糖糖浆或珍珠煮不熟。</li>
  <li>制作不均匀大小的珍珠，影响口感。</li>
  <li>在组装饮品时遗漏了某个配料，或者顺序错乱。</li>
  <li>在每个步骤的烹饪和泡制过程中没有等待计时器完成。</li>
</ul>

`,
  },

  {
    id: 'cookingdom-game-level-22',
    title: 'Cookingdom 第22关 简单奶昔攻略',
    pageTitle: 'Cookingdom 第22关 简单奶昔攻略',
    pageSubtitle: '学习如何在Cookingdom第22关调制完美的简单奶昔。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: true,
    imageUrl: '/images/guides_22.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
    iframeUrl: 'https://www.youtube.com/embed/Xdrg_MknwEQ',
    seo: {
      title: 'Cookingdom 第22关攻略：简单奶昔 | cookingdom.co',
      description:
        '掌握Cookingdom第22关的简单奶昔制作技巧。获取选果、搅拌、调节浓稠度及上桌的实用建议。',
      keywords: 'Cookingdom 第22关, 简单奶昔, 健康饮品, 搅拌, 水果奶昔',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_22.webp',
      levelInfoHtml:
        '<h3>简单奶昔</h3><p><strong>难度：</strong>简单</p><p><strong>预计时间：</strong>2分钟</p><p><strong>奖励：</strong>五星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-21',
          title: 'Cookingdom 第21关 珍珠奶茶攻略',
          imageUrl: '/images/guides_21.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
        },
        {
          id: 'cookingdom-game-level-23',
          title: 'Cookingdom 第23关 圣诞原木蛋糕攻略',
          imageUrl: '/images/guides_23.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
        },
      ],
    },
    detailsHtml: `
<h2>欢迎来到 Cookingdom 第22关：简单冰沙攻略与指南</h2>
<p>
  欢迎，冰沙大师！在 **Cookingdom 第22关**，你的任务是为三位不同的顾客制作完美的 **简单冰沙**。本关将引导你通过 Cookingdom 的直观而精准的烹饪机制，在轻松、没有计时器的环境下，帮助你掌握每款清爽的冰沙。
</p>
<p>
  本攻略提供了征服 Cookingdom 第22关的具体步骤，详细描述了每个冰沙所需的所有配料、动作和精准的放置，助你制作出冰沙佳品。
</p>

<h2>制作冰沙所需的配料</h2>
<table>
  <thead>
    <tr>
      <th>配料</th>
      <th>数量</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>鳄梨片</td>
      <td>1份</td>
      <td>用于制作第一个（绿色）冰沙。通过初步切片获取。</td>
    </tr>
    <tr>
      <td>蓝莓</td>
      <td>1份</td>
      <td>用于制作第二个（紫色）冰沙。通过切片阶段获取。</td>
    </tr>
    <tr>
      <td>葡萄</td>
      <td>1份</td>
      <td>用于制作第二个（紫色）冰沙。通过切片阶段获取。</td>
    </tr>
    <tr>
      <td>西瓜片</td>
      <td>1份</td>
      <td>用于制作第三个（热带风味）冰沙。通过切片阶段获取。</td>
    </tr>
    <tr>
      <td>橙子片</td>
      <td>1份</td>
      <td>用于第三个（热带风味）冰沙，并作为装饰。通过切片阶段获取。</td>
    </tr>
    <tr>
      <td>糖块</td>
      <td>适量</td>
      <td>用于紫色和热带风味的冰沙。</td>
    </tr>
    <tr>
      <td>蜂蜜</td>
      <td>适量</td>
      <td>用于紫色和热带风味的冰沙（使用勺子添加）。</td>
    </tr>
    <tr>
      <td>牛奶</td>
      <td>适量</td>
      <td>热带风味冰沙的液体基础。</td>
    </tr>
    <tr>
      <td>冰块</td>
      <td>适量</td>
      <td>加入到紫色和热带风味冰沙中，在搅拌后添加。</td>
    </tr>
    <tr>
      <td>条纹吸管</td>
      <td>1根</td>
      <td>作为热带风味冰沙的装饰。</td>
    </tr>
  </tbody>
</table>

<h2>简单冰沙完美制作：逐步指南</h2>

<h3>步骤1. 切割所需水果</h3>
<p>
  首先进入水果切割小游戏。滑动屏幕切割即将到来的水果：**西瓜、橙子、鳄梨、蓝莓和葡萄**。确保切割的水果数量与屏幕顶部计数器显示的数量一致（例如，“西瓜x3”、“橙子x4”等）。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>通过一次切割多个水果来组合切割，提高效率。当你切割水果时，计数器上显示的所需数量会减少。
</div>

<h3>步骤2. 制作鳄梨冰沙（顾客1）</h3>
<p>
  第一位顾客（戴粉色帽子的水豚）想要一杯**绿色冰沙**。将装有**鳄梨片**的玻璃杯放入搅拌机，关上盖子，然后按下开关按钮开始搅拌（心形图标表示搅拌成功）。打开盖子，将搅拌好的冰沙倒入空玻璃杯中。最后，将做好的绿色冰沙递给顾客。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>顾客的语音气泡中的绿色提示你，鳄梨是主要配料。
</div>

<h3>步骤3. 制作浆果蜂蜜冰沙（顾客2）💜🍯🧊</h3>
<p>
  第二位顾客（戴草帽的水豚）要求一杯**紫色冰沙**，并且需要**蜂蜜**和**冰块**。将**糖块**罐、**蜂蜜**（用勺子添加）、接着是**蓝莓**玻璃杯和**葡萄**玻璃杯分别放入搅拌机。进行搅拌。将冰沙倒入空玻璃杯后，拿来**冰块**容器加入冰块。将紫色冰沙递给顾客。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>仔细查看顾客的语音气泡图标：紫色表示浆果，蜂蜜罐图标，冰块图标。确保加入所有配料！
</div>

<h3>步骤4. 制作热带风味冰沙（顾客3）🍊🌴🧊</h3>
<p>
  第三位顾客（穿西装的水豚）要求一杯**热带冰沙**，配有**牛奶、蜂蜜、冰块、吸管**和**橙子装饰**。将**牛奶盒**、**糖块**罐和**蜂蜜**（用勺子添加）放入搅拌机。然后加入**西瓜片**玻璃杯和**橙子片**玻璃杯。进行搅拌。将搅拌好的冰沙倒入空玻璃杯后，加入**冰块**，从容器中拿出**条纹吸管**，放入杯中。最后，将**橙子片**从架子上的碗中取出，放到玻璃杯的边缘作为装饰。完成后，将冰沙递给顾客。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>仔细检查语音气泡中的所有配料：热带水果的棕橙色、牛奶盒、蜂蜜、冰块、吸管和橙子片图标。
</div>

<h3>步骤5. 最终场景和完成关卡</h3>
<p>
  当你将最后一杯冰沙递给穿西装的水豚后，将触发一段简短的过场动画，他与另一位水豚分享饮料。接下来会出现结果屏幕，显示你的表现。
</p>
<div class="tip">
  💡 <strong>小贴士：</strong>争取获得“超级烹饪！”并且达到3颗星，确认所有步骤都完美准确地完成了。
</div>

<h2>Cookingdom 第22关成功的最佳技巧</h2>
<ul>
  <li>✔️ **仔细观察顾客的语音气泡**，识别每种冰沙所需的所有配料、添加剂（如糖和蜂蜜）和装饰品。</li>
  <li>✔️ 在水果切割阶段，**仅切割所需数量**的水果，以避免过度切割。</li>
  <li>✔️ 确保所有添加剂（如蜂蜜和糖）和液体（如牛奶）在按下搅拌按钮前先加入到搅拌机中。</li>
  <li>✔️ 确保所有装饰品（如冰块、吸管和橙子片）**在冰沙倒入杯中后**再添加，而不是直接放入搅拌机。</li>
  <li>✔️ 每次正确执行的动作（添加配料、搅拌、装饰、递送）都会有一个有帮助的**心形图标弹出**，做出标记。</li>
</ul>

<h2>Cookingdom 第22关常见错误及避免方法</h2>
<ul>
  <li>漏掉顾客特别要求的配料或装饰品（例如忘记蜂蜜、冰块或吸管）。</li>
  <li>使用错误的水果组合制作顾客要求的特定冰沙。</li>
  <li>将装饰品如冰块或吸管直接加入搅拌机中，而不是放入最终的玻璃杯中。</li>
  <li>在初始小游戏中没有切够每种所需的水果数量。</li>
  <li>配料的加入顺序错误，尤其是先加入装饰品而不是冰沙倒入杯中后，可能会导致问题。</li>
</ul>

`,
  },

  {
    // 添加第23关条目
    id: 'cookingdom-game-level-23',
    title: 'Cookingdom 第23关 圣诞树根蛋糕通关攻略',
    pageTitle: 'Cookingdom 第23关 圣诞树根蛋糕通关攻略',
    pageSubtitle: '掌握 Cookingdom 第23关的节日甜点 —— 圣诞树根蛋糕（Bûche de Noël）。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: true,
    imageUrl: '/images/guides_23.webp', // 占位图
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
    iframeUrl: 'https://www.youtube.com/embed/3Eg2387hpaE', // 占位视频链接
    seo: {
      title: 'Cookingdom 第23关攻略：圣诞树根蛋糕 | cookingdom.co',
      description:
        '掌握 Cookingdom 第23关的圣诞树根蛋糕制作技巧。了解如何制作蛋糕胚、卷制、夹心、抹面及节日装饰。',
      keywords: 'Cookingdom 第23关, Cookingdom 圣诞树根蛋糕, Bûche de Noël, 节日甜品, 烘焙攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_23.webp', // 占位图
      levelInfoHtml:
        '<h3>圣诞树根蛋糕</h3><p><strong>难度：</strong> 高</p><p><strong>预计时间：</strong> 5 分钟</p><p><strong>奖励：</strong> 5 星</p>', // 预估
      featuredGuides: [
        {
          id: 'cookingdom-game-level-22',
          title: 'Cookingdom 第22关 简易冰沙通关攻略',
          imageUrl: '/images/guides_22.webp', // 占位图
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
        },
        {
          id: 'cookingdom-game-level-24',
          title: 'Cookingdom 第24关 牛肉河粉通关攻略',
          imageUrl: '/images/guides_24.webp', // 占位图
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
        },
      ],
    },
    detailsHtml: `
<h2>Cookingdom Level 23 Walkthrough: 制作完美的圣诞树蛋糕</h2>
<p>欢迎来到 **Cookingdom Level 23**！这个关卡将带领玩家通过一个直观且精准的烹饪体验，在没有计时器的轻松环境中，专注于制作完美的 **圣诞树蛋糕**。</p>
<p>本攻略提供详细的逐步指导，确保你在 Cookingdom Level 23 中成功，涵盖了所有必需的食材、操作和摆放。</p>

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
      <td>鸡蛋</td>
      <td>4</td>
      <td>分开放入蛋黄碗（粉色碗）和蛋白碗（蓝色碗）。</td>
    </tr>
    <tr>
      <td>牛奶</td>
      <td>1壶</td>
      <td>加入蛋黄中。</td>
    </tr>
    <tr>
      <td>油</td>
      <td>1瓶</td>
      <td>加入蛋黄中。</td>
    </tr>
    <tr>
      <td>面粉</td>
      <td>1碗</td>
      <td>用筛子筛入蛋黄混合物中。</td>
    </tr>
    <tr>
      <td>香草精</td>
      <td>1瓶</td>
      <td>用小蓝色勺子加入蛋黄混合物中。</td>
    </tr>
    <tr>
      <td>糖</td>
      <td>1碗</td>
      <td>在搅打蛋白时，使用小蓝色勺子加入糖。</td>
    </tr>
    <tr>
      <td>巧克力糖霜</td>
      <td>1个裱花袋</td>
      <td>用于夹层填充和外部涂层。</td>
    </tr>
    <tr>
      <td>装饰物</td>
      <td>1盘</td>
      <td>包括蛋白酥蘑菇、红浆果、松果、冬青叶和巧克力卷。</td>
    </tr>
  </tbody>
</table>

<h2>逐步成功指南</h2>

<h3>第1步：分开鸡蛋</h3>
<p>将4个鸡蛋分别拖到碗中，鸡蛋会自动破裂。确保蛋黄放入 **粉色碗**，蛋白放入 **蓝色碗**。</p>
<ul>
  <li>**提示：** 在拖动鸡蛋时要精确地放入正确的碗中。鸡蛋破裂后，游戏会自动分开蛋黄和蛋白。**心形图标**确认所有4个鸡蛋已分开。</li>
</ul>

<h3>第2步：混合蛋黄糊</h3>
<p>在 **粉色碗**（蛋黄）中加入 **牛奶**，然后加入 **油**。选择 **筛子**，将其放在粉色碗上，再将 **面粉** 筛入。用 **小蓝勺子**加入 **香草精**。一个打蛋器会自动出现，拖动它在碗中搅拌，直到面糊变得光滑。</p>
<ul>
  <li>**提示：** 在搅拌之前，确保所有食材都加入。搅拌直到 **心形图标** 出现。</li>
</ul>

<h3>第3步：打发蛋白</h3>
<p>选择 **电动搅拌器**，放入 **蓝色碗**（蛋白）中，搅拌器会自动启动。在搅拌过程中，选择 **小蓝勺子**，舀取 **糖** 并加入到蛋白中。继续搅拌，直到蛋白打发至硬性泡沫。</p>
<ul>
  <li>**提示：** 在搅拌器运行时加入糖。搅拌器会在蛋白打发至正确的状态时自动停止。**心形图标** 确认成功。</li>
</ul>

<h3>第4步：合并蛋黄糊和蛋白糊</h3>
<p>选择 **蓝色刮刀**，用它轻轻地将打发好的蛋白从蓝色碗中铲入粉色碗中的蛋黄糊中。用刮刀轻轻搅拌，直到两者完全混合。</p>
<ul>
  <li>**提示：** 要轻轻折叠搅拌，以保持糊状物的蓬松感。搅拌时，等到 **心形图标** 出现。</li>
</ul>

<h3>第5步：铺开并烘焙</h3>
<p>再次选择 **刮刀**，将混合好的面糊从粉色碗中舀到 **矩形烤盘** 上，均匀铺开。将烤盘拖入 **烤箱**。</p>
<ul>
  <li>**提示：** 确保面糊均匀铺开，这样可以保证烘焙均匀。等待烤箱计时器（进度条）完成。</li>
</ul>

<h3>第6步：切割烤好的蛋糕</h3>
<p>烤好的蛋糕自动从烤箱中取出，放在木板上。选择 **刀具**，沿着指南线垂直切割，将蛋糕分成四个相等的长条。</p>
<ul>
  <li>**提示：** 精确跟随虚线进行切割，确保切口干净。**心形图标** 确认切割成功。</li>
</ul>

<h3>第7步：涂抹夹心</h3>
<p>选择 **巧克力糖霜裱花袋**，在第二、第三和第四条蛋糕条上画出之字形的夹心。选择 **偏刮刀**，用它将糖霜均匀涂抹在蛋糕条上。</p>
<ul>
  <li>**提示：** 在蛋糕条上裱花时要整齐。将糖霜均匀地涂抹到三条蛋糕条的表面。</li>
</ul>

<h3>第8步：卷起蛋糕</h3>
<p>将第一条（无夹心的）蛋糕条拖到木板底部，紧紧卷起来。然后，将第二条（有夹心的）蛋糕条绕着第一条卷起来。依此类推，继续用第三条和第四条蛋糕条将蛋糕卷得更大。</p>
<ul>
  <li>**提示：** 卷的时候要紧凑，确保每条蛋糕条排列整齐。最后一条蛋糕条添加后，蛋糕自动成型为圣诞树形状。**心形图标** 确认成功。</li>
</ul>

<h3>第9步：涂抹外层糖霜并刻画纹理</h3>
<p>卷好的蛋糕会自动放到一个白色蛋糕架上。再次选择 **巧克力糖霜裱花袋**，将它涂抹在整个蛋糕的外表面（顶部和两侧）。选择 **叉子工具**，在蛋糕的长度方向上刮出树皮般的纹理。</p>
<ul>
  <li>**提示：** 确保糖霜覆盖完全。用叉子刮出平滑的纹理，确保逼真。**心形图标** 确认成功。</li>
</ul>

<h3>第10步：装饰圣诞树蛋糕</h3>
<p>选择 **装饰盘**，将蛋白酥蘑菇、红浆果、冬青叶、松果和巧克力卷等装饰物依次放到蛋糕上，按指示位置放置。</p>
<ul>
  <li>**提示：** 根据蛋糕上高亮的区域匹配装饰物。所有装饰物必须放置正确。</li>
</ul>

<h3>第11步：完成关卡</h3>
<p>所有装饰物放置完成后，蛋糕会闪闪发光，短暂显示‘圣诞快乐’的祝福信息，然后关卡完成，显示“味觉爆炸！”的结果画面，并获得3颗星。</p>
<ul>
  <li>**提示：** 享受你的节日创作！</li>
</ul>

<h2>成功的提示与常见问题</h2>

<h3>成功提示</h3>
<ul>
  <li>仔细遵循拖放提示，正确添加食材和工具。</li>
  <li>注意视觉提示，如高亮区域和指南线。</li>
  <li>每当完成重要的搅拌、烘焙或装饰步骤时，等待 **心形图标确认**。</li>
  <li>操作时要流畅和精确，特别是在涂抹糖霜和卷蛋糕时。</li>
</ul>

<h3>常见问题</h3>
<ul>
  <li>将食材放错碗（例如将蛋黄放入蛋白碗）。</li>
  <li>忘记添加某个食材（如香草精或糖）。</li>
  <li>打发蛋白或混合面糊不够充分。</li>
  <li>涂抹糖霜或面糊时不均匀。</li>
  <li>切割或卷蛋糕时操作不精确。</li>
  <li>最终装饰物放置错误。</li>
</ul>

`,
  },

  {
    // 添加第24关的条目
    id: 'cookingdom-game-level-24',
    title: 'Cookingdom 第24关 牛肉河粉通关攻略',
    pageTitle: 'Cookingdom 第24关 牛肉河粉通关攻略',
    pageSubtitle: '在 Cookingdom 第24关中掌握制作美味越南牛肉河粉的技巧。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_24.webp', // 占位图
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
    iframeUrl: 'https://www.youtube.com/embed/wTjgf3r0fAc', // 占位视频链接
    seo: {
      title: 'Cookingdom 第24关攻略：牛肉河粉 | cookingdom.co',
      description:
        '在 Cookingdom 第24关中掌握牛肉河粉制作技巧。学习如何炖汤、煮米粉、切牛肉并组合出这道芳香的越南汤面。',
      keywords: 'Cookingdom 第24关, Cookingdom 牛肉河粉, 越南汤面, 米粉汤, 炖汤技巧, 游戏攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_24.webp', // 占位图
      levelInfoHtml:
        '<h3>牛肉河粉</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 4分钟</p><p><strong>奖励：</strong> 5星</p>', // 预估值
      featuredGuides: [
        {
          id: 'cookingdom-game-level-23',
          title: 'Cookingdom 第23关 圣诞原木蛋糕攻略',
          imageUrl: '/images/guides_23.webp', // 占位图
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
        },
        {
          id: 'cookingdom-game-level-25',
          title: 'Cookingdom 第25关 披萨攻略',
          imageUrl: '/images/guides_25.webp', // 占位图
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第24关 游戏概览</h2>
<p>在 Cookingdom 第24关中，你将学习制作牛肉河粉，这是一道美味且芳香的越南米粉汤。挑战在于炖煮完美的高汤，掌握牛肉的火候，并正确组合所有关键配料。这道菜融合了香草、米粉和薄切牛肉，是众多玩家喜爱的菜品，而在游戏中，你需要在每一步都做到完美才能让顾客满意。</p>
<p>本关需要精确操作和细致处理，因为牛肉河粉包含多个步骤：炖汤、煮米粉、掌控牛肉熟度。Cookingdom 通关指南将为你提供详细的操作流程，助你轻松过关。</p>

<h2 id="goal">Cookingdom 第24关 目标</h2>
<ul>
  <li>用正确的香料和食材炖煮高汤。</li>
  <li>煮米粉至软嫩不烂。</li>
  <li>将牛肉切片并掌握适当火候。</li>
  <li>搭配新鲜香草、豆芽和青柠组合成河粉。</li>
  <li>趁热上桌，确保风味十足。</li>
</ul>

<h2 id="steps">牛肉河粉制作流程</h2>
<ol>
  <li>
    <h3>炖煮高汤</h3>
    <p>开始时要准备高汤。本关关键在于长时间炖煮。在游戏中，你需要加入牛骨、洋葱、生姜，以及八角、丁香、肉桂和豆蔻等香料，炖煮约30-40分钟。</p>
    <p><strong>提示：</strong> 勤捞浮沫，保持汤色清澈。</p>
  </li>
  <li>
    <h3>准备米粉</h3>
    <p>高汤炖煮时可同步煮米粉。在 Cookingdom 第24关中，要煮到刚好熟而不烂。</p>
    <p><strong>提示：</strong> 不要煮太久，米粉应保留弹性，因之后会与热汤继续加热。</p>
  </li>
  <li>
    <h3>切牛肉片</h3>
    <p>河粉一般配以薄切生牛肉，靠热汤烫熟。在游戏中，你需逆纹切片，尽量薄如纸。</p>
    <p><strong>提示：</strong> 可先将牛肉冷冻10-15分钟再切，便于切出薄片。</p>
  </li>
  <li>
    <h3>组合河粉</h3>
    <p>汤和米粉准备就绪后，即可开始组装。先将米粉放入碗中，再铺上生牛肉，缓缓倒入热汤，借其温度烫熟牛肉。</p>
    <p><strong>提示：</strong> 倒汤要轻，均匀加热牛肉，避免过熟。</p>
  </li>
  <li>
    <h3>添加香草与配料</h3>
    <p>最后的点缀很关键：添加香菜、罗勒、青葱，再配以豆芽和青柠。</p>
    <p><strong>提示：</strong> 可选配辣椒片、海鲜酱或是辣椒酱提味。</p>
  </li>
  <li>
    <h3>上桌</h3>
    <p>趁热上菜，确保牛肉中心仍微粉红且口感柔嫩。热汤将持续加热牛肉，提升口感。</p>
    <p><strong>提示：</strong> 汤要滚热且芳香四溢，这是牛肉河粉的灵魂所在。</p>
  </li>
</ol>

<h2 id="tips">第24关通关技巧</h2>
<ul>
  <li>
    <h3>炖好高汤</h3>
    <p>高汤是整道菜的核心。尽可能延长炖煮时间，并精准掌控香料比例。</p>
    <p><strong>提示：</strong> 如果味道太浓，可加水稀释；味道偏淡则继续炖。</p>
  </li>
  <li>
    <h3>控制米粉熟度</h3>
    <p>米粉非常容易煮过。Cookingdom 第24关中，若煮过头，会变得糊烂。</p>
  </li>
  <li>
    <h3>薄切牛肉</h3>
    <p>牛肉要尽可能薄，这样才能快速熟透。使用锋利的刀具并预冻肉块最有效。</p>
  </li>
  <li>
    <h3>满足顾客偏好</h3>
    <p>有的顾客会要求额外配料，如更多香草或辣酱。务必查看顾客偏好并满足需求。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom 第24关中，牛肉河粉的成功关键在于食材比例、火候掌握与装盘美感。炖出鲜美的高汤、精准掌握牛肉熟度、搭配合适香料装饰，每一步都不可忽视。通过本攻略，你将学会完美复刻这道越南经典美食。</p>
<p>只要耐心练习，你一定能掌握牛肉河粉，顺利闯关，继续 Cookingdom 的美味冒险之旅！</p>
`,
  },

  {
    // 添加第25关
    id: 'cookingdom-game-level-25',
    title: 'Cookingdom 第25关比萨制作攻略',
    pageTitle: 'Cookingdom 第25关比萨制作攻略',
    pageSubtitle: '在Cookingdom第25关中，学习如何从零开始制作完美比萨。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_25.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
    iframeUrl: 'https://www.youtube.com/embed/2VmrimKmrPE',
    seo: {
      title: 'Cookingdom 第25关攻略：比萨 | cookingdom.co',
      description:
        '掌握Cookingdom第25关的比萨制作技巧。学习如何处理面团、酱料、配料、烘焙与上菜，打造完美比萨。',
      keywords: 'Cookingdom 第25关, Cookingdom 比萨, 比萨面团, 烘焙, 配料, 意大利美食, 攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_25.webp',
      levelInfoHtml:
        '<h3>比萨</h3><p><strong>难度：</strong>中等</p><p><strong>预计时间：</strong>4分钟</p><p><strong>奖励：</strong>5颗星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-24',
          title: 'Cookingdom 第24关牛肉河粉攻略',
          imageUrl: '/images/guides_24.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
        },
        {
          id: 'cookingdom-game-level-26',
          title: 'Cookingdom 第26关冰沙攻略',
          imageUrl: '/images/guides_26.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第25关概览</h2>
<p>在Cookingdom第25关中，你将制作最受欢迎且变化多端的料理之一：比萨。你需要从零开始制作面团、准备配料，并将比萨烤至金黄酥脆。这一关考验你在风味与口感上的平衡技巧。</p>
<p>目标是确保比萨烘烤完美：饼皮酥脆、配料分布均匀、酱料与奶酪比例恰到好处。本攻略将详细解析通关每一步，助你完美掌握第25关。</p>

<h2 id="goal">第25关目标</h2>
<ul>
  <li>从零制作比萨面团。</li>
  <li>均匀涂抹酱料。</li>
  <li>添加适量奶酪和配料。</li>
  <li>将比萨烘焙至酥脆。</li>
  <li>趁热上菜，保持美味。</li>
</ul>

<h2 id="steps">比萨制作分步指南</h2>
<ol>
  <li>
    <h3>制作比萨面团</h3>
    <p>理想的比萨面团应轻盈有弹性，又能承载丰富配料。混合面粉、酵母、水、橄榄油与盐，搅拌成光滑面团。</p>
    <p><strong>提示：</strong>揉面至少5–7分钟，以激活面筋，打造Q弹饼皮。</p>
  </li>
  <li>
    <h3>发酵面团</h3>
    <p>揉好后，静置发酵30分钟，体积应膨胀至两倍大小，面团内部形成气泡。</p>
    <p><strong>提示：</strong>跳过此步骤将导致饼皮紧实无弹。</p>
  </li>
  <li>
    <h3>擀开面团</h3>
    <p>发酵后轻轻按压排气，擀开至所需厚度。</p>
    <p><strong>提示：</strong>薄饼皮更脆，厚饼皮则更蓬松。</p>
  </li>
  <li>
    <h3>涂抹酱料</h3>
    <p>均匀涂抹番茄酱或白酱，切勿过量以防饼皮变湿。</p>
    <p><strong>提示：</strong>可加入蒜粉、牛至或罗勒调味。</p>
  </li>
  <li>
    <h3>添加奶酪与配料</h3>
    <p>覆盖奶酪（莫扎里拉最佳），也可混搭切达、帕玛森或山羊奶酪。</p>
    <p>之后选择喜爱的配料，如意大利香肠、蘑菇、青椒等。</p>
    <p><strong>提示：</strong>保持配料分布均匀，每口都丰富。</p>
  </li>
  <li>
    <h3>烘焙比萨</h3>
    <p>预热烤箱至约475°F（245°C），放入比萨进行10–15分钟烘焙。</p>
    <p><strong>提示：</strong>饼皮金黄且奶酪起泡即为完成。</p>
  </li>
  <li>
    <h3>切片并上菜</h3>
    <p>出炉后稍凉，用刀切片。</p>
    <p><strong>提示：</strong>趁热享用，可撒上罗勒或淋橄榄油提味。</p>
  </li>
</ol>

<h2 id="tips">第25关高分技巧</h2>
<ul>
  <li>
    <h3>不要配料过多</h3>
    <p>过多配料会导致烘焙不均或饼皮变湿。建议控制在3–4种搭配合理的配料。</p>
  </li>
  <li>
    <h3>面团质地需完美</h3>
    <p>耐心揉面与发酵是成功关键。如太粘可适量加粉，但切勿太干。</p>
  </li>
  <li>
    <h3>正确的烘焙温度</h3>
    <p>高温有助酥脆饼皮。使用披萨石时务必预热。</p>
  </li>
  <li>
    <h3>注意时间</h3>
    <p>10分钟后检查状况，奶酪冒泡、边缘金黄即可出炉。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>第25关让你从零挑战比萨制作的每个步骤，从面团、酱料、配料到最终烘焙。关键在于口感与风味的平衡。</p>
<p>遵循本攻略，你将轻松掌握制作流程，为后续更复杂料理打下坚实基础。</p>
`,
  },

  {
    id: 'cookingdom-game-level-26',
    title: 'Cookingdom 第26关：冰沙制作攻略',
    pageTitle: 'Cookingdom 第26关：冰沙制作攻略',
    pageSubtitle: '学习如何在 Cookingdom 第26关制作完美冰沙。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_26.webp', // 占位符
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
    iframeUrl: 'https://www.youtube.com/embed/28BOvXkyj-E', // 占位符
    seo: {
      title: 'Cookingdom 第26关指南：冰沙 | cookingdom.co',
      description: '精通 Cookingdom 第26关冰沙制作。获取选材、调液、搅拌到合适浓稠度及装饰的技巧。',
      keywords: 'Cookingdom 第26关, Cookingdom 冰沙, 健康饮品, 搅拌, 水果饮料, 游戏攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_26.webp', // 占位符
      levelInfoHtml:
        '<h3>冰沙</h3><p><strong>难度：</strong>简单</p><p><strong>预计时间：</strong>2分钟</p><p><strong>奖励：</strong>5星</p>', // 估计
      featuredGuides: [
        {
          id: 'cookingdom-game-level-25',
          title: 'Cookingdom 第25关：披萨攻略',
          imageUrl: '/images/guides_25.webp', // 占位符
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
        },
        {
          id: 'cookingdom-game-level-27',
          title: 'Cookingdom 第27关：三明治攻略',
          imageUrl: '/images/guides_27.webp', // 占位符
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第26关 游戏概述</h2>
<p>在 Cookingdom 第26关，你的任务是准备一杯<a href="/cookingdom-game-level-26" title="第26关冰沙">Cookingdom冰沙</a>，这是一款清爽且健康的饮品。本关重点在于将各种原料混合，调制出既顺滑又不太稠也不太稀的口感。你需要仔细挑选水果、液体和添加剂，以达到口味的完美平衡。Cookingdom挑战你精准搭配原料，以满足虚拟顾客的味蕾。</p>
<p>本攻略将引导你一步步完成完美冰沙的制作，确保你的作品既美味又赏心悦目。</p>

<h2 id="goal">Cookingdom 第26关 目标</h2>
<ul>
  <li>选择适合的水果作为冰沙基础。</li>
  <li>添加牛奶、果汁或酸奶等液体。</li>
  <li>搅拌至合适的浓稠度。</li>
  <li>用可选装饰品装饰冰沙。</li>
  <li>制作多种变化，满足顾客需求。</li>
</ul>

<h2 id="steps">Cookingdom 第26关 冰沙制作步骤详解</h2>
<ol>
  <li>
    <h3>选择基础水果</h3>
    <p>在本关中，你可以选择香蕉、草莓、蓝莓和芒果等多种水果。关键是挑选搭配合理、相互衬托的水果组合。</p>
    <p><strong>小贴士：</strong>想要浓稠的冰沙，选香蕉或芒果；想要轻盈口感，则选择浆果类或菠萝。</p>
  </li>
  <li>
    <h3>添加液体</h3>
    <p>接下来加入液体基底，可选牛奶、杏仁奶、橙汁或酸奶。液体帮助搅拌水果并决定最终浓稠度。</p>
    <p><strong>小贴士：</strong>想要更奶滑的口感，选酸奶或牛奶；想轻盈爽口，选果汁或水。</p>
  </li>
  <li>
    <h3>加入可选配料</h3>
    <p>可以添加其它配料来提升风味和口感，比如：</p>
    <ul>
      <li>蜂蜜或龙舌兰糖浆增甜。</li>
      <li>菠菜或羽衣甘蓝增加绿色营养。</li>
      <li>冰块让冰沙更冷更稠。</li>
      <li>蛋白粉或花生酱增加蛋白质。</li>
    </ul>
    <p><strong>小贴士：</strong>注意甜度，过多糖浆会掩盖水果原味。</p>
  </li>
  <li>
    <h3>搅拌至完美</h3>
    <p>将所有材料放入搅拌机，开始搅拌，目标是达到顺滑无颗粒的质地。需密切观察搅拌进度。</p>
    <p><strong>小贴士：</strong>先短暂搅拌后检查质地，若太稠加液体，太稀则加水果或冰块，再继续搅拌。</p>
  </li>
  <li>
    <h3>尝味调整</h3>
    <p>搅拌后品尝冰沙，调整甜度、酸度或浓稠度。</p>
    <p><strong>小贴士：</strong>若过甜，可挤入柠檬或酸橙汁提鲜；若太稠，加少量液体。</p>
  </li>
  <li>
    <h3>装饰并上桌</h3>
    <p>用以下装饰让冰沙更有卖相：</p>
    <ul>
      <li>新鲜水果片（如草莓片或香蕉片）。</li>
      <li>薄荷叶增添清新色彩。</li>
      <li>奇亚籽或格兰诺拉麦片增加口感。</li>
    </ul>
    <p><strong>小贴士：</strong>外观也很重要，漂亮的装饰能提升顾客满意度。</p>
  </li>
  <li>
    <h3>及时上桌，取悦顾客</h3>
    <p>确定味道和外观满意后，尽快上桌。成品应顺滑、奶香浓郁，色彩鲜艳，香气扑鼻。</p>
  </li>
</ol>

<h2 id="tips">Cookingdom 第26关 专业提示</h2>
<ul>
  <li>
    <h3>平衡水果与液体</h3>
    <p>完美冰沙的关键是平衡。挑选搭配良好的水果，液体要适量，帮助搅拌但不稀释味道。</p>
  </li>
  <li>
    <h3>适量使用冰块</h3>
    <p>冰块能增稠冰沙，但过多会稀释味道。只需少量冰块即可。</p>
  </li>
  <li>
    <h3>满足顾客偏好</h3>
    <p>有些顾客喜欢绿色冰沙或特定配料，如浆果或蛋白粉。注意顾客需求，提升评分。</p>
  </li>
  <li>
    <h3>注意搅拌时间</h3>
    <p>避免过度搅拌！保持适当浓稠度，过度搅拌会导致冰沙过稀。</p>
  </li>
  <li>
    <h3>尝试超级食物</h3>
    <p>想突出特色？添加奇亚籽、亚麻籽或螺旋藻等超级食物，提升健康价值和竞争力。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom 第26关的冰沙制作需要水果、液体和配料的恰当平衡，并搅拌到完美质地。无论是芒果菠萝的热带风味，还是浆果满满的健康饮品，都考验你的精准与创造力。</p>
<p>按照本攻略，你能快速掌握冰沙制作技巧。调好浓稠度，用心装饰，呈现美味冰沙，赢得顾客喜爱！</p>
`,
  },

  {
    // 添加第27关条目
    id: 'cookingdom-game-level-27',
    title: 'Cookingdom 第27关 三明治通关攻略',
    pageTitle: 'Cookingdom 第27关 三明治通关攻略',
    pageSubtitle: '学习在 Cookingdom 第27关中制作完美的三明治。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_27.webp', // 占位符
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
    iframeUrl: 'https://www.youtube.com/embed/EdWqB5U12HY', // 占位符
    seo: {
      title: 'Cookingdom 第27关攻略：三明治 | cookingdom.co',
      description:
        '掌握 Cookingdom 第27关的三明治制作技巧。获取选择面包、蛋白质、蔬菜、调味料、分层和上菜的技巧。',
      keywords: 'Cookingdom 第27关, Cookingdom 三明治, 快速料理, 分层技巧, 面包选择, 蛋白质, 攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_27.webp', // 占位符
      levelInfoHtml:
        '<h3>三明治</h3><p><strong>难度：</strong> 简单</p><p><strong>预计时间：</strong> 3 分钟</p><p><strong>奖励：</strong> 5 星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-26',
          title: 'Cookingdom 第26关 果昔通关攻略',
          imageUrl: '/images/guides_26.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
        },
        {
          id: 'cookingdom-game-level-28',
          title: 'Cookingdom 第28关 羊角面包通关攻略',
          imageUrl: '/images/guides_28.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第27关 概览</h2>
<p>在 Cookingdom 第27关，你需要制作一份美味的三明治——一种快捷又令人满足的餐点。虽然看似简单，但要制作出完美的三明治，需要选对食材并合理搭配，让顾客满意。这一关考验你的创意、味道平衡以及分层技巧。</p>
<p>你的三明治需要有酥脆且美味的面包、优质蛋白质、新鲜蔬菜与恰到好处的调味品。完美的分层可确保每一口都令人惊喜。这个攻略将逐步指导你通关 Cookingdom 第27关，制作出完美的三明治。</p>

<h2 id="goal">第27关目标</h2>
<ul>
  <li>选择适合的面包</li>
  <li>选定蛋白质（如鸡肉、火鸡或牛肉）</li>
  <li>添加增添口感的蔬菜</li>
  <li>搭配调味品和配料，如奶酪</li>
  <li>组装三明治并新鲜上桌</li>
</ul>

<h2 id="steps">Cookingdom 第27关 三明治制作步骤</h2>
<ol>
  <li>
    <h3>选择面包</h3>
    <p>面包是美味三明治的基础。在本关中，你可以选择白面包、全麦面包、恰巴塔面包或法棍。不同的面包会影响口感和风味。</p>
    <p><strong>提示：</strong>想要更酥脆的口感可选法棍或恰巴塔，偏爱柔软口感可选全麦或白面包。</p>
    <p><strong>提示：</strong>游戏中可能要求你将面包烘烤以增加酥脆度。</p>
  </li>
  <li>
    <h3>添加蛋白质</h3>
    <p>你可以选择烤鸡、火鸡、火腿，甚至牛肉饼作为蛋白质来源。</p>
    <p>将蛋白质均匀铺在面包上，这将是三明治的主要风味来源。</p>
    <p><strong>提示：</strong>蛋白质应烹饪得恰到好处，避免味道盖过其他食材。烤鸡和火鸡是较为平衡的选择。</p>
  </li>
  <li>
    <h3>加入蔬菜</h3>
    <p>蔬菜可增添清爽和脆感。经典选择包括生菜、番茄、洋葱和腌黄瓜。</p>
    <p><strong>提示：</strong>将蔬菜切片并均匀分布，确保每一口都能吃到所有配料。别放太多，避免吃起来困难。</p>
    <p><strong>提示：</strong>使用新鲜蔬菜，以确保最佳口感和外观。</p>
  </li>
  <li>
    <h3>添加调味品与奶酪</h3>
    <p>使用美乃滋、芥末酱、番茄酱或烧烤酱等调味品为三明治增味。</p>
    <p><strong>提示：</strong>不要用量过多，只需适量提升风味与湿润感。可添加奶酪，如切达、瑞士或美式奶酪增加奶香层次。</p>
    <p><strong>提示：</strong>如加奶酪，稍微融化一下会更美味。</p>
  </li>
  <li>
    <h3>组装三明治</h3>
    <p>将食材整齐堆叠：底部放面包，接着是蛋白质、蔬菜，最后是调味品与奶酪，顶部再盖一片面包。</p>
    <p><strong>提示：</strong>如果太厚，可轻轻压扁或切半方便食用。</p>
  </li>
  <li>
    <h3>上菜并享用</h3>
    <p>完成后立即上桌，确保新鲜美观。</p>
    <p><strong>提示：</strong>摆盘也很重要！可将三明治对切或切成四块，并搭配酸黄瓜或薯片装饰。</p>
  </li>
</ol>

<h2 id="tips">第27关专业技巧</h2>
<ul>
  <li>
    <h3>使用新鲜食材</h3>
    <p>三明治的关键在于新鲜度。选择最新鲜的蛋白质和蔬菜，才能做出口感和视觉兼具的佳作。</p>
  </li>
  <li>
    <h3>味道平衡</h3>
    <p>搭配要合理。如果主食材偏重口味（如牛肉），选择清淡的配菜和调味品；若是火鸡等轻淡蛋白质，则可用芥末或烧烤酱加强风味。</p>
  </li>
  <li>
    <h3>烘烤增加口感</h3>
    <p>烤过的面包让三明治更具层次，尤其配上融化的奶酪更显美味。</p>
  </li>
  <li>
    <h3>注意顾客偏好</h3>
    <p>某些顾客可能会有特别要求，如“多奶酪”、“不要洋葱”或“多美乃滋”。满足这些需求会提高评分。</p>
  </li>
  <li>
    <h3>别堆得太满</h3>
    <p>虽然加料丰富诱人，但三明治太厚会难以入口。保持简洁、平衡更佳。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom 第27关的三明治制作强调的是平衡与细节。从选择合适的面包、蛋白质、蔬菜到调味料与奶酪，每一步都需细致处理，才能打造出令人满意的三明治。</p>
<p>遵循本攻略步骤，你将能轻松通关第27关，制作出顾客喜爱的美味三明治。记住顾客偏好、烘烤面包，并确保所有食材新鲜可口！</p>
`,
  },

  {
    id: 'cookingdom-game-level-28',
    title: 'Cookingdom 第 28 关 羊角面包攻略',
    pageTitle: 'Cookingdom 第 28 关 羊角面包攻略',
    pageSubtitle: '在 Cookingdom 第 28 关学习如何制作完美酥脆的羊角面包。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_28.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
    iframeUrl: 'https://www.youtube.com/embed/mqwmQRn8jQI',
    seo: {
      title: 'Cookingdom 第 28 关攻略：羊角面包 | cookingdom.co',
      description:
        '掌握 Cookingdom 第 28 关中的羊角面包制作技巧。了解如何准备面团、层压、整形、发酵和烘焙这款经典的法式点心。',
      keywords: 'Cookingdom 第 28 关, 羊角面包, 法式点心, 烘焙, 层压, 面团, 攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_28.webp',
      levelInfoHtml:
        '<h3>羊角面包</h3><p><strong>难度：</strong>高</p><p><strong>预计时间：</strong>6 分钟</p><p><strong>奖励：</strong>5 星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-27',
          title: 'Cookingdom 第 27 关 三明治攻略',
          imageUrl: '/images/guides_27.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
        },
        {
          id: 'cookingdom-game-level-29',
          title: 'Cookingdom 第 29 关 抹茶波霸奶茶攻略',
          imageUrl: '/images/guides_29.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第 28 关概述</h2>
<p>在 Cookingdom 第 28 关中，你需要制作一款经典的法式羊角面包（Croissant），它以酥脆、奶油层次分明而闻名。这一关强调精准度，因为制作完美的羊角面包需要配料均衡、准备得当，并关注烘焙时间。Cookingdom 要求你掌握制作这些精致点心的技术，确保每一个羊角面包都金黄酥脆，内里柔软。</p>
<p>本攻略将引导你从准备面团到完美烘焙，逐步掌握传统羊角面包的制作方法。</p>

<h2 id="goal">Cookingdom 第 28 关目标</h2>
<ul>
    <li>准备羊角面包所需面团。</li>
    <li>折叠并层压面团，形成酥皮层。</li>
    <li>整形面团并进行发酵。</li>
    <li>将羊角面包烘焙至金黄色。</li>
    <li>将羊角面包趁热新鲜上桌。</li>
</ul>

<h2 id="steps">Cookingdom 第 28 关 羊角面包制作步骤</h2>
<ol>
    <li>
        <h3>准备面团</h3>
        <p>制作羊角面包的第一步是准备面团。Cookingdom 第 28 关提供了所需的基本食材：面粉、黄油、酵母、糖、牛奶和少量盐。</p>
        <p><strong>提示：</strong>先混合干性材料（面粉、糖、盐），再加入湿性材料（酵母和牛奶）。将面团揉至光滑后静置发酵 30 分钟。</p>
        <p><strong>提示：</strong>使用冷黄油可以帮助之后形成层次。</p>
    </li>
    <li>
        <h3>折叠和层压面团</h3>
        <p>这是形成羊角面包酥皮层的关键步骤。面团醒发后，将其擀成长方形，将冷黄油块放在中间。</p>
        <p>将面团像信封一样包住黄油，再次擀开成长条形。然后将其对折成三折，静置 20~30 分钟。</p>
        <p><strong>提示：</strong>重复这个过程 2~3 次，可以创造出标志性的酥皮结构。在 Cookingdom 第 28 关中，每一次折叠和静置都对质地至关重要。</p>
    </li>
    <li>
        <h3>整形羊角面包</h3>
        <p>面团层压完成后，最后一次擀开成长方形。将其切割成三角形，这些就是每一个羊角面包的形状。</p>
        <p><strong>提示：</strong>从三角形底部卷至顶端，卷紧一些以确保层次分明。还可以轻微弯曲成新月形，展现经典造型。</p>
        <p><strong>提示：</strong>确保每个羊角面包大小一致，以保证均匀烘焙。</p>
    </li>
    <li>
        <h3>进行二次发酵</h3>
        <p>整形完成后，将羊角面包放置于烤盘上，彼此间留有间距，静置约 1 小时，等待其膨胀。</p>
        <p><strong>提示：</strong>置于温暖无风处有助于发酵。在 Cookingdom 第 28 关中，耐心是获得理想质地的关键。</p>
    </li>
    <li>
        <h3>烘焙羊角面包</h3>
        <p>将烤箱预热至 375°F（约 190°C）。当羊角面包完成发酵后即可烘焙。</p>
        <p><strong>提示：</strong>在表面刷上一层蛋液（鸡蛋+水），可获得金黄光泽的外皮。</p>
        <p>烘焙时间约为 15~20 分钟，直到呈现蓬松金黄状态即可。</p>
        <p><strong>提示：</strong>注意观察，不要烤得太干或夹生。</p>
    </li>
    <li>
        <h3>出炉享用</h3>
        <p>当羊角面包烤至酥脆金黄后，将其取出，稍微冷却后即可享用。</p>
        <p><strong>提示：</strong>羊角面包最佳的品尝状态是新鲜热腾时，外脆内松软。也可撒些糖粉或搭配果酱、黄油一起食用。</p>
    </li>
</ol>

<h2 id="tips">Cookingdom 第 28 关技巧提示</h2>
<ul>
    <li>
        <h3>使用冷黄油</h3>
        <p>酥皮的关键是冷黄油。在 Cookingdom 第 28 关中，保持黄油冷却可在烘焙时产生蒸汽，帮助形成层次。</p>
    </li>
    <li>
        <h3>发酵时请有耐心</h3>
        <p>不要跳过任何一次发酵时间。每次的静置对最终成品至关重要。</p>
    </li>
    <li>
        <h3>蛋液增色</h3>
        <p>刷上蛋液能使表面更加金黄亮泽，也有助于提升口感。</p>
    </li>
    <li>
        <h3>留好烤盘间距</h3>
        <p>羊角面包之间保持间距可防止粘连，确保其自由膨胀。</p>
    </li>
    <li>
        <h3>控制烘焙时间</h3>
        <p>不要烤得太久，否则变硬；也不能太短，否则内部不熟。</p>
    </li>
</ul>

<h2 id="summary">总结</h2>
<p>在 Cookingdom 第 28 关中，制作完美的羊角面包需要技术与时间的双重把握。从制作面团、层压到整形，每一步都决定着成品的酥脆与蓬松度。最后一步，是烘焙出金黄诱人的外表，并趁热享用。</p>
<p>跟随本攻略指南，你将掌握羊角面包的制作艺术，用香气四溢、奶香浓郁的点心征服顾客！准备好迎接 Cookingdom 中更加挑战的关卡吧！</p>
`,
  },

  {
    id: 'cookingdom-game-level-29',
    title: 'Cookingdom 第29关 抹茶波霸奶茶攻略',
    pageTitle: 'Cookingdom 第29关 抹茶波霸奶茶攻略',
    pageSubtitle: '学习如何制作流行的抹茶波霸奶茶，Cookingdom第29关全流程详解。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_29.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
    iframeUrl: 'https://www.youtube.com/embed/RE42E5fmjLo',
    seo: {
      title: 'Cookingdom 第29关攻略：抹茶波霸奶茶 | cookingdom.co',
      description:
        '精通Cookingdom第29关抹茶波霸奶茶制作。掌握波霸煮制、抹茶调配、奶制品融合及饮品组装技巧。',
      keywords: 'Cookingdom 第29关, 抹茶波霸奶茶, 波霸, 抹茶, 珍珠奶茶, 饮品, 攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_29.webp',
      levelInfoHtml:
        '<h3>抹茶波霸奶茶</h3><p><strong>难度：</strong> 中等</p><p><strong>预计时间：</strong> 4分钟</p><p><strong>奖励：</strong> 4星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-28',
          title: 'Cookingdom 第28关 牛角包攻略',
          imageUrl: '/images/guides_28.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
        },
        {
          id: 'cookingdom-game-level-30',
          title: 'Cookingdom 第30关 土耳其烤肉攻略',
          imageUrl: '/images/guides_30.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第29关 游戏简介</h2>
<p>在Cookingdom第29关，你将制作风靡一时的抹茶波霸奶茶！这款饮品将抹茶的浓郁与波霸珍珠的Q弹完美结合，带来甜美又满足的口感。关卡的挑战在于平衡抹茶的独特风味、奶制品的顺滑以及波霸的嚼劲。你的目标是制作出一杯顾客喜爱的完美抹茶波霸奶茶。</p>
<p>本攻略将带你逐步完成制作流程，从煮制波霸珍珠，到调配抹茶与牛奶，最后精美装杯。</p>

<h2 id="goal">Cookingdom 第29关 目标</h2>
<ul>
  <li>煮制波霸珍珠。</li>
  <li>调配抹茶粉和适当的材料。</li>
  <li>加入牛奶制作奶香浓郁的饮品。</li>
  <li>组装抹茶波霸奶茶。</li>
  <li>用合适的装饰完成饮品。</li>
</ul>

<h2 id="steps">Cookingdom 第29关 抹茶波霸奶茶详细制作步骤</h2>
<ol>
  <li>
    <h3>煮制波霸珍珠</h3>
    <p>首先，煮波霸珍珠。第29关中，波霸需在水中煮约10-15分钟。</p>
    <p><strong>小贴士：</strong> 煮制时要时常搅拌，防止珍珠粘连。煮熟后，用冷水冲洗以终止加热过程。</p>
    <p><strong>小贴士：</strong> 把波霸浸泡在糖浆或蜂蜜中，增加甜味和风味。</p>
  </li>
  <li>
    <h3>调配抹茶</h3>
    <p>接下来准备抹茶粉，将抹茶粉与少量热水搅拌至顺滑起泡。</p>
    <p><strong>小贴士：</strong> 用小搅拌器或打泡器彻底溶解抹茶粉，避免结块。</p>
    <p>根据顾客口味添加糖或蜂蜜调甜。</p>
  </li>
  <li>
    <h3>加入牛奶</h3>
    <p>选择全脂牛奶、杏仁奶或燕麦奶，倒入抹茶混合物中，搅拌均匀。</p>
    <p><strong>小贴士：</strong> 想更浓郁口感可以加入炼乳。</p>
  </li>
  <li>
    <h3>组装抹茶波霸奶茶</h3>
    <p>将波霸珍珠放入杯底，然后倒入抹茶奶液。</p>
    <p><strong>小贴士：</strong> 倒入前确认抹茶奶液充分混合，避免抹茶粉沉淀。</p>
  </li>
  <li>
    <h3>装饰并上桌</h3>
    <p>加冰块保持清凉，可撒些抹茶粉或用装饰吸管提升视觉效果。</p>
    <p><strong>小贴士：</strong> 使用粗吸管方便吸食波霸。</p>
  </li>
</ol>

<h2 id="tips">烹饪达人贴士</h2>
<ul>
  <li>
    <h3>掌握波霸口感</h3>
    <p>波霸应Q弹适中，切忌过软或过硬，且要甜味适中。</p>
  </li>
  <li>
    <h3>筛抹茶粉</h3>
    <p>抹茶粉若结块，可用细筛过筛，保证口感顺滑。</p>
  </li>
  <li>
    <h3>选择合适牛奶</h3>
    <p>全脂牛奶口感更浓郁，杏仁奶或燕麦奶则适合轻盈无乳糖版本。</p>
  </li>
  <li>
    <h3>搅拌均匀</h3>
    <p>充分搅拌抹茶与牛奶，防止口感不均和抹茶粉结块。</p>
  </li>
  <li>
    <h3>注意甜度</h3>
    <p>甜度要恰到好处，既衬托奶香与波霸口感，也避免过甜或苦涩。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>制作完美的抹茶波霸奶茶，关键在于抹茶风味的平衡、波霸的弹牙口感及奶香的顺滑融合。按步骤操作，确保波霸煮熟，抹茶充分溶解且甜度适中。细节决定成败，选择合适的牛奶和甜味剂能让饮品更臻完美。</p>
<p>遵循本攻略，你将能成功完成Cookingdom第29关，制作出顾客喜爱的抹茶波霸奶茶，向饮品大师的目标更进一步！</p>
`,
  },

  {
    // 第30关条目
    id: 'cookingdom-game-level-30',
    title: 'Cookingdom 第30关 烤肉卷攻略',
    pageTitle: 'Cookingdom 第30关 烤肉卷攻略',
    pageSubtitle: '学习如何制作经典的第30关烤肉卷（Doner Kebab）。',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_30.webp', // 占位图
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
    iframeUrl: 'https://www.youtube.com/embed/G3sO3IvbM0Q', // 占位视频链接
    seo: {
      title: 'Cookingdom 第30关攻略：烤肉卷 | cookingdom.co',
      description:
        '掌握Cookingdom第30关的烤肉卷制作。获取烤肉技巧、准备配料、组装和上菜的详细指导，制作这道受欢迎的土耳其街头美食。',
      keywords:
        'Cookingdom 第30关, Cookingdom 烤肉卷, 烤肉卷, 土耳其美食, 街头美食, 烤肉, 皮塔饼, 攻略',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_30.webp',
      levelInfoHtml:
        '<h3>烤肉卷（Doner Kebab）</h3><p><strong>难度：</strong> 中等</p><p><strong>大致时间：</strong> 5分钟</p><p><strong>奖励：</strong> 4星</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-29',
          title: 'Cookingdom 第29关 抹茶波霸茶攻略',
          imageUrl: '/images/guides_29.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
        },
        {
          id: 'cookingdom-game-level-31',
          title: 'Cookingdom 第31关 摩卡咖啡攻略',
          imageUrl: '/images/guides_31.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-31' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Cookingdom 第30关 游戏概述</h2>
<p>在Cookingdom第30关，你需要准备一道经典且广受喜爱的菜品：烤肉卷（Doner Kebab）！这道土耳其街头美食通常由美味的肉类（羊肉、鸡肉或牛肉）、新鲜蔬菜和美味酱料组成，全部包裹在温热的皮塔饼或薄饼中。本关的挑战是完美烤制肉类、组装馅料，并确保烤肉卷味道鲜美且口感均衡。</p>
<p>本攻略将逐步指导你制作烤肉卷，确保你完成所有目标，向顾客端上一份美味可口的餐点。</p>

<h2 id="goal">Cookingdom 第30关 目标</h2>
<ul>
  <li>烹饪肉类（羊肉、鸡肉或牛肉）。</li>
  <li>准备配料（蔬菜、酱料）。</li>
  <li>将烤肉卷组装在皮塔饼或薄饼中。</li>
  <li>将烤肉卷端给顾客。</li>
</ul>

<h2 id="steps">Cookingdom 第30关 烤肉卷制作步骤详解</h2>
<ol>
  <li>
    <h3>准备肉类</h3>
    <p>制作烤肉卷的第一步是烹饪肉类。在第30关中，你可以选择鸡肉、牛肉或羊肉。</p>
    <p><strong>提示：</strong>确保肉类充分腌制，加入香料和草药以提升风味。肉类应烤至外脆内嫩。</p>
    <p><strong>提示：</strong>注意烤制过程，避免烤过头或未熟。理想的烤肉颜色为金黄酥脆且内部多汁。</p>
  </li>
  <li>
    <h3>准备蔬菜</h3>
    <p>在肉类烤制时，准备蔬菜。传统烤肉卷通常使用番茄、洋葱和生菜，也可加入腌黄瓜或黄瓜片增加口感。</p>
    <p><strong>提示：</strong>将蔬菜切成均匀细片，方便整齐摆放。新鲜爽脆的蔬菜能很好地搭配丰富的肉类风味。</p>
  </li>
  <li>
    <h3>准备酱料</h3>
    <p>美味的烤肉卷离不开合适的酱料。第30关会提供酸奶酱、大蒜酱和辣椒酱等选择。</p>
    <p><strong>提示：</strong>均匀淋在肉和蔬菜上，提升整体口感。酱料量要适中，既增加奶香和辣味，又不会盖过其他食材。</p>
  </li>
  <li>
    <h3>组装烤肉卷</h3>
    <p>所有食材准备好后，开始组装。先将烤好的肉放入温热的皮塔饼或薄饼中央。</p>
    <p><strong>提示：</strong>均匀摆放肉类，让每口都能品尝到均衡的馅料。</p>
    <p>再依次加入切好的蔬菜，层层叠加。</p>
    <p><strong>提示：</strong>确保蔬菜分布均匀，口感层次丰富。</p>
    <p>最后淋上选择的酱料，注意不要过量，以免食用时弄脏手。</p>
  </li>
  <li>
    <h3>包裹并上菜</h3>
    <p>将皮塔饼或薄饼紧紧包裹住馅料，确保食材不易散落。</p>
    <p><strong>提示：</strong>如皮塔饼过大，可将边缘折叠固定。包裹要牢固，避免顾客吃时散开。</p>
    <p><strong>提示：</strong>本关也可以根据顾客需求，将烤肉卷切成两半，方便食用。</p>
  </li>
</ol>

<h2 id="tips">第30关实用技巧</h2>
<ul>
  <li>
    <h3>完美烤制肉类</h3>
    <p>肉类是烤肉卷的核心，烤至外脆内嫩是关键。注意掌控时间，避免过干或未熟。第30关会根据你的表现给予奖励。</p>
  </li>
  <li>
    <h3>使用新鲜爽脆的蔬菜</h3>
    <p>蔬菜应新鲜且切片均匀，保证口感和风味。生菜、洋葱和番茄是最佳选择。</p>
  </li>
  <li>
    <h3>合理搭配酱料</h3>
    <p>酱料不宜过多，适量的大蒜酱和辣椒酱能带来完美的奶香与辣味平衡。</p>
  </li>
  <li>
    <h3>包裹牢固</h3>
    <p>包裹方式影响食用体验。确保皮塔饼紧密包裹馅料，防止散开。</p>
  </li>
  <li>
    <h3>注意烤制时间</h3>
    <p>烤肉和煮肉时间要严格掌控，防止肉质变干或口感不佳。</p>
  </li>
</ul>

<h2 id="summary">总结</h2>
<p>Cookingdom第30关的烤肉卷制作重点在于烤制出金黄酥脆且多汁的肉类，准备新鲜蔬菜，并用适量酱料调味，最终组装出美味且口感均衡的烤肉卷。只要遵循本攻略的步骤，关注细节，你就能成功完成任务，让顾客满意。</p>
<p>记住，第30关考验的是口感、味道和呈现的平衡。掌握好烤制、酱料和包裹技巧，你将成为烤肉卷大师！</p>
`,
  },
]
