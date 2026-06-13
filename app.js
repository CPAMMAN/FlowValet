// ============================================================
//  CP AMMAN ISSUE TRACKER v3 — Shared Library
// ============================================================

// ── i18n strings ─────────────────────────────────────────────
window.STRINGS = {
en:{
  appName:'Issue Tracker', hotelName:'Crowne Plaza Amman',
  login:'Sign In', logout:'Logout', username:'Username', password:'Password',
  loginSub:'Sign in to access your dashboard',
  loginErr:'Incorrect username or password.',
  addIssue:'+ Add Issue', saveIssue:'Save Issue', updateIssue:'Update Issue',
  editIssue:'Edit Issue', deleteIssue:'Delete Issue', confirmDelete:'Delete this issue permanently?',
  reportIssue:'Report New Issue',
  title:'Issue Title', location:'Location', priority:'Priority',
  etaFrom:'ETA From', etaTo:'ETA To', comment:'Comment', optional:'optional',
  assignDepts:'Assign to Departments',
  photos:'Photos', addPhotos:'Tap to add photos (camera or gallery)',
  statusLabel:'Status', noteLabel:'Notes', updateStatus:'Update Status',
  resolutionPhotos:'Resolution Photos',
  saveUpdate:'Save Update',
  open:'Open', inProgress:'In Progress', resolved:'Resolved', notFixable:'Not Fixable',
  high:'High', medium:'Medium', low:'Low',
  allStatuses:'All Statuses', allDepts:'All Departments', allPriorities:'All Priorities',
  search:'Search issues…',
  tabToday:'Today', tabYesterday:'Yesterday', tabOpen:'Open', tabCustom:'Custom Date', tabAll:'All',
  totalIssues:'Total Issues', statOpen:'Open', statProgress:'In Progress',
  statResolved:'Resolved', statNotFixable:'Not Fixable', statAssigned:'Assigned',
  noIssues:'No issues found', noIssuesAdd:'Add an issue to get started',
  noPhoto:'No photo', download:'Download', edit:'Edit', delete:'Delete', status:'Status', update:'Update',
  mgmtDashboard:'Management Dashboard', deptDashboard:'Department Dashboard',
  reportedBy:'Reported by', updatedBy:'Updated by',
  etaLabel:'ETA', resolutionNote:'Resolution note',
  notifNewIssue:'New issue reported', notifStatusUpdate:'Issue status updated',
  custom:'Custom',
  depts:{ Engineering:'Engineering', Housekeeping:'Housekeeping', 'Front Office':'Front Office', 'F&B':'F&B', Security:'Security', Custom:'Custom' },
  priorities:{ high:'🔴 High', medium:'🟠 Medium', low:'🟢 Low' },
  statuses:{ open:'🔴 Open', 'in-progress':'🟠 In Progress', resolved:'✅ Resolved', 'not-fixable':'⛔ Not Fixable' },
  welcomeMgmt:'Welcome back,', welcomeDept:'Good day,',
  welcomeSubMgmt:'Full overview of all hotel issues',
  welcomeSubDept:'Issues assigned to your department',
  mgmtChip:'👑 Management', deptChip:'🏨 Departments',
  credits:'Developed by Mohammad Al-Jammal', creditsSub:'IHG Hotels & Resorts · Crowne Plaza Amman',
  pickDate:'Pick a date',
  notifAllow:'Enable Notifications', notifDenied:'Notifications blocked',
  uploadHint:'Camera or gallery',
},
ar:{
  appName:'نظام تتبع المشكلات', hotelName:'كراون بلازا عمّان',
  login:'تسجيل الدخول', logout:'خروج', username:'اسم المستخدم', password:'كلمة المرور',
  loginSub:'تسجيل الدخول للوصول إلى لوحة التحكم',
  loginErr:'اسم المستخدم أو كلمة المرور غير صحيحة.',
  addIssue:'+ إضافة مشكلة', saveIssue:'حفظ المشكلة', updateIssue:'تحديث المشكلة',
  editIssue:'تعديل المشكلة', deleteIssue:'حذف المشكلة', confirmDelete:'هل تريد حذف هذه المشكلة نهائياً؟',
  reportIssue:'الإبلاغ عن مشكلة جديدة',
  title:'عنوان المشكلة', location:'الموقع', priority:'الأولوية',
  etaFrom:'من تاريخ', etaTo:'إلى تاريخ', comment:'تعليق', optional:'اختياري',
  assignDepts:'تعيين للأقسام',
  photos:'الصور', addPhotos:'اضغط لإضافة صور (كاميرا أو معرض)',
  statusLabel:'الحالة', noteLabel:'ملاحظات', updateStatus:'تحديث الحالة',
  resolutionPhotos:'صور الحل',
  saveUpdate:'حفظ التحديث',
  open:'مفتوحة', inProgress:'قيد المعالجة', resolved:'تم الحل', notFixable:'غير قابلة للإصلاح',
  high:'عالية', medium:'متوسطة', low:'منخفضة',
  allStatuses:'كل الحالات', allDepts:'كل الأقسام', allPriorities:'كل الأولويات',
  search:'ابحث في المشاكل…',
  tabToday:'اليوم', tabYesterday:'أمس', tabOpen:'المفتوحة', tabCustom:'تاريخ محدد', tabAll:'الكل',
  totalIssues:'إجمالي المشاكل', statOpen:'مفتوحة', statProgress:'قيد المعالجة',
  statResolved:'تم الحل', statNotFixable:'غير قابلة للإصلاح', statAssigned:'معينة لك',
  noIssues:'لا توجد مشاكل', noIssuesAdd:'أضف مشكلة للبدء',
  noPhoto:'لا توجد صورة', download:'تحميل', edit:'تعديل', delete:'حذف', status:'الحالة', update:'تحديث',
  mgmtDashboard:'لوحة الإدارة', deptDashboard:'لوحة القسم',
  reportedBy:'أبلغ عنه', updatedBy:'تم التحديث بواسطة',
  etaLabel:'الموعد المتوقع', resolutionNote:'ملاحظة الحل',
  notifNewIssue:'تم الإبلاغ عن مشكلة جديدة', notifStatusUpdate:'تم تحديث حالة المشكلة',
  custom:'مخصص',
  depts:{ Engineering:'الهندسة', Housekeeping:'التدبير المنزلي', 'Front Office':'الاستقبال', 'F&B':'الأغذية والمشروبات', Security:'الأمن', Custom:'مخصص' },
  priorities:{ high:'🔴 عالية', medium:'🟠 متوسطة', low:'🟢 منخفضة' },
  statuses:{ open:'🔴 مفتوحة', 'in-progress':'🟠 قيد المعالجة', resolved:'✅ تم الحل', 'not-fixable':'⛔ غير قابلة للإصلاح' },
  welcomeMgmt:'أهلاً،', welcomeDept:'صباح الخير،',
  welcomeSubMgmt:'نظرة شاملة على جميع مشاكل الفندق',
  welcomeSubDept:'المشاكل المعينة لقسمك',
  mgmtChip:'👑 الإدارة', deptChip:'🏨 الأقسام',
  credits:'تطوير: محمد الجمّال', creditsSub:'فنادق ومنتجعات IHG · كراون بلازا عمّان',
  pickDate:'اختر تاريخاً',
  notifAllow:'تفعيل الإشعارات', notifDenied:'الإشعارات محظورة',
  uploadHint:'كاميرا أو معرض الصور',
}
};

window.t = function(k){ return (window.STRINGS[window.currentLang]||window.STRINGS.en)[k]||k; };

// ── Supabase helpers ──────────────────────────────────────────
window.sb = {
  get: async function(table,filter){
    var cfg=window.CP_CONFIG;
    var r=await fetch(cfg.SUPABASE_URL+'/rest/v1/'+table+(filter?'?'+filter:''),
      {headers:{'apikey':cfg.SUPABASE_KEY,'Authorization':'Bearer '+cfg.SUPABASE_KEY,'Accept':'application/json'}});
    if(!r.ok){ console.warn('sb.get failed',r.status,table); return []; }
    return r.json();
  },
  post: async function(table,data){
    var cfg=window.CP_CONFIG;
    var r=await fetch(cfg.SUPABASE_URL+'/rest/v1/'+table,
      {method:'POST',headers:{'apikey':cfg.SUPABASE_KEY,'Authorization':'Bearer '+cfg.SUPABASE_KEY,'Content-Type':'application/json','Prefer':'return=representation'},body:JSON.stringify(data)});
    return r.json();
  },
  patch: async function(table,filter,data){
    var cfg=window.CP_CONFIG;
    var r=await fetch(cfg.SUPABASE_URL+'/rest/v1/'+table+'?'+filter,
      {method:'PATCH',headers:{'apikey':cfg.SUPABASE_KEY,'Authorization':'Bearer '+cfg.SUPABASE_KEY,'Content-Type':'application/json'},body:JSON.stringify(data)});
    return r.ok;
  },
  del: async function(table,filter){
    var cfg=window.CP_CONFIG;
    var r=await fetch(cfg.SUPABASE_URL+'/rest/v1/'+table+'?'+filter,
      {method:'DELETE',headers:{'apikey':cfg.SUPABASE_KEY,'Authorization':'Bearer '+cfg.SUPABASE_KEY}});
    return r.ok;
  }
};

// ── ImgBB upload ──────────────────────────────────────────────
window.uploadPhoto = async function(base64DataUrl){
  var base64=base64DataUrl.includes(',') ? base64DataUrl.split(',')[1] : base64DataUrl;
  var form=new FormData();
  form.append('image',base64);
  form.append('key',window.CP_CONFIG.IMGBB_API_KEY);
  var r=await fetch('https://api.imgbb.com/1/upload',{method:'POST',body:form});
  if(!r.ok) throw new Error('ImgBB HTTP '+r.status);
  var d=await r.json();
  if(!d.success) throw new Error('ImgBB: '+(d.error&&d.error.message||JSON.stringify(d)));
  return d.data.url;
};

window.uploadPhotos = async function(base64Array){
  return Promise.all(base64Array.map(window.uploadPhoto));
};

// ── Image watermark (canvas) ──────────────────────────────────
window.watermarkAndDownload = function(imgUrl, location, title){
  var img=new Image(); img.crossOrigin='anonymous';
  img.onload=function(){
    var canvas=document.createElement('canvas');
    canvas.width=img.naturalWidth; canvas.height=img.naturalHeight;
    var ctx=canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    var now=new Date();
    var dateStr=now.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})+' '+now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
    var line1='📍 '+(location||'Crowne Plaza Amman');
    var line2='🕐 '+dateStr;
    var fs=Math.max(16,Math.floor(canvas.width*0.025));
    ctx.font='bold '+fs+'px Inter,Arial,sans-serif';
    var pad=fs*0.8, lh=fs*1.6;
    var w1=ctx.measureText(line1).width, w2=ctx.measureText(line2).width;
    var boxW=Math.max(w1,w2)+pad*2, boxH=lh*2+pad*1.2;
    var bx=pad, by=canvas.height-boxH-pad;
    ctx.fillStyle='rgba(139,26,74,0.82)';
    roundRect(ctx,bx,by,boxW,boxH,fs*0.5);
    ctx.fillStyle='#fff';
    ctx.fillText(line1,bx+pad,by+lh*0.9);
    ctx.fillText(line2,bx+pad,by+lh*1.85);
    // CP logo watermark top-right
    ctx.font='bold '+(fs*0.75)+'px Inter,Arial,sans-serif';
    ctx.fillStyle='rgba(255,255,255,0.7)';
    ctx.textAlign='right';
    ctx.fillText('Crowne Plaza Amman',canvas.width-pad,pad+fs);
    ctx.textAlign='left';
    var a=document.createElement('a');
    a.download=(title||'issue')+'-'+Date.now()+'.jpg';
    a.href=canvas.toDataURL('image/jpeg',0.92);
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };
  img.src=imgUrl;
};
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath(); ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath(); ctx.fill();
}

// ── Notification sound (Web Audio API) ───────────────────────
window.playNotifSound = function(type){
  try{
    var ctx=new(window.AudioContext||window.webkitAudioContext)();
    var osc=ctx.createOscillator(); var gain=ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if(type==='new'){
      osc.frequency.setValueAtTime(880,ctx.currentTime);
      osc.frequency.setValueAtTime(1100,ctx.currentTime+0.1);
      osc.frequency.setValueAtTime(880,ctx.currentTime+0.2);
      gain.gain.setValueAtTime(0.3,ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.4);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime+0.4);
    } else {
      osc.frequency.setValueAtTime(660,ctx.currentTime);
      osc.frequency.setValueAtTime(880,ctx.currentTime+0.15);
      gain.gain.setValueAtTime(0.25,ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.35);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime+0.35);
    }
  }catch(e){}
};

// ── Toast ─────────────────────────────────────────────────────
window.showToast = function(msg, type){
  var el=document.getElementById('toast');
  if(!el) return;
  el.textContent=msg;
  el.className='toast show'+(type?' toast-'+type:'');
  clearTimeout(el._t);
  el._t=setTimeout(function(){ el.classList.remove('show'); },3000);
};

// ── Helpers ───────────────────────────────────────────────────
window.escH = function(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
window.isSameDay = function(d1,d2){ return d1.getFullYear()===d2.getFullYear()&&d1.getMonth()===d2.getMonth()&&d1.getDate()===d2.getDate(); };
window.fmtDate = function(iso){
  if(!iso) return '';
  var d=new Date(iso);
  return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
};
window.fmtDateTime = function(iso){
  if(!iso) return '';
  var d=new Date(iso);
  return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})+', '+d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
};

// ── Notification permission ───────────────────────────────────
window.requestNotifPermission = async function(){
  if(!('Notification' in window)) return;
  if(Notification.permission==='default'){
    await Notification.requestPermission();
  }
};

window.showBrowserNotif = function(title, body){
  if(Notification.permission==='granted'){
    new Notification(title,{body:body,icon:'./icons/icon-192x192.png'});
  }
};
