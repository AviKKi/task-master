import { StatusBar } from 'expo-status-bar';
import {
  ArrowRight,
  AudioLines,
  CalendarDays,
  ChevronDown,
  Clock3,
  Folder,
  Grid2X2,
  ListTodo,
  Minimize2,
  MoreHorizontal,
  Shuffle,
  Sprout,
} from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const completedProgress = 5;
const progressCount = 12;

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Header />
          <Progress />
          <NextAction />
          <Text style={styles.afterLabel}>AFTER THIS</Text>
          <View style={styles.rule} />
          <TaskGroup
            count="3"
            title="Work"
            tasks={[
              ['01', 'Review research notes', '~25 MIN'],
              ['02', 'Reply to team messages', '~15 MIN'],
              ['03', "Plan tomorrow's priorities", '~10 MIN'],
            ]}
          />
          <TaskGroup
            count="2"
            title="Personal"
            tasks={[
              ['01', 'Book weekend getaway', '~20 MIN'],
              ['02', 'Evening read', '~30 MIN'],
            ]}
          />
          <TaskGroup count="1" title="Ideas" tasks={[["01", 'Capture a 3am thought', '~5 MIN']]} />
          <Garden />
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.identityRail}>
        <Text style={styles.identity}>TASK MASTER</Text>
        <Text style={styles.identityMeta}>V1.0</Text>
      </View>
      <View style={styles.headerMain}>
        <View style={styles.titleLine}>
          <Text style={styles.title}>TODAY</Text>
          <View style={styles.dateBlock}>
            <Text style={styles.dateWeekday}>WED</Text>
            <Text style={styles.dateDay}>20</Text>
            <Text style={styles.dateMonth}>MAY</Text>
            <Text style={styles.dateYear}>2025</Text>
          </View>
        </View>
        <Text style={styles.manifesto}>Clarity in intent.{`\n`}Follow through in context.</Text>
        <View style={styles.headerRule} />
      </View>
      <Pressable accessibilityLabel="Open voice planning" style={styles.voiceButton}>
        <AudioLines color="#f4f0e8" size={22} strokeWidth={1.6} />
      </Pressable>
    </View>
  );
}

function Progress() {
  return (
    <View style={styles.progressSection}>
      <View style={styles.progressCopyLine}>
        <Text style={styles.monoLabel}>TODAY'S PROGRESS</Text>
        <Text style={styles.monoLabel}>3 OF 7 DONE</Text>
      </View>
      <View style={styles.progressMarks}>
        {Array.from({ length: progressCount }, (_, index) => (
          <View
            key={index}
            style={[styles.progressMark, index < completedProgress && styles.progressMarkComplete]}
          />
        ))}
      </View>
    </View>
  );
}

function NextAction() {
  return (
    <View style={styles.nextCard}>
      <View style={styles.nextCardTop}>
        <View style={styles.nextKicker}>
          <View style={styles.activeDot} />
          <Text style={styles.monoLabel}>NEXT ACTION</Text>
        </View>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>~10 MIN</Text>
          <Clock3 color="#edf0e6" size={15} strokeWidth={1.5} />
        </View>
      </View>
      <Text style={styles.nextTitle}>Draft presentation outline</Text>
      <View style={styles.nextBodyLine}>
        <Text style={styles.nextDescription}>Write the 3 key points{`\n`}and a rough structure.</Text>
        <ArrowRight color="#111210" size={26} strokeWidth={1.5} />
      </View>
      <View style={styles.nextActions}>
        <Action icon={<Minimize2 color="#171816" size={22} strokeWidth={1.4} />} label="Make smaller" />
        <Action icon={<Clock3 color="#171816" size={22} strokeWidth={1.4} />} label="Postpone" />
        <Action icon={<Shuffle color="#171816" size={22} strokeWidth={1.4} />} label="Pick another" />
      </View>
    </View>
  );
}

function Action({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <Pressable style={styles.action}>
      {icon}
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

function TaskGroup({
  count,
  title,
  tasks,
}: {
  count: string;
  title: string;
  tasks: Array<[string, string, string]>;
}) {
  return (
    <View style={styles.taskGroup}>
      <View style={styles.groupHeader}>
        <View style={styles.groupTitleWrap}>
          <Folder color="#426d56" fill="#426d56" size={22} strokeWidth={1.4} />
          <Text style={styles.groupTitle}>{title}</Text>
        </View>
        <View style={styles.groupRight}>
          <Text style={styles.groupCount}>{count}</Text>
          <ChevronDown color="#1a1b18" size={15} strokeWidth={1.7} />
        </View>
      </View>
      <View style={styles.taskList}>
        {tasks.map(([number, task, duration]) => (
          <View key={number} style={styles.taskRow}>
            <Text style={styles.taskNumber}>{number}</Text>
            <Text numberOfLines={1} style={styles.taskName}>{task}</Text>
            <Text style={styles.taskDuration}>{duration}</Text>
            <MoreHorizontal color="#171816" size={19} strokeWidth={1.8} style={styles.taskMore} />
          </View>
        ))}
      </View>
    </View>
  );
}

function Garden() {
  return (
    <View style={styles.gardenCard}>
      <View style={styles.gardenCopy}>
        <View style={styles.gardenHeadingLine}>
          <Text style={styles.gardenTitle}>FOCUS GARDEN</Text>
          <View style={styles.gardenStatus} />
        </View>
        <Text style={styles.gardenMeta}>LEVEL 2 - GROWING</Text>
        <Text style={styles.gardenXp}>+12 XP</Text>
        <Text style={styles.gardenToday}>TODAY</Text>
      </View>
      <View style={styles.gardenScene}>
        <View style={styles.gardenShadow} />
        <View style={styles.gardenBase}>
          <View style={styles.pathOne} />
          <View style={styles.pathTwo} />
          <Plant left={35} top={48} size={42} />
          <Plant left={80} top={35} size={34} />
          <Plant left={134} top={45} size={46} />
          <Tree left={95} top={-3} height={87} />
          <Tree left={142} top={18} height={60} />
        </View>
      </View>
    </View>
  );
}

function Plant({ left, top, size }: { left: number; top: number; size: number }) {
  return <View style={[styles.plant, { height: size, left, top, width: size }]} />;
}

function Tree({ left, top, height }: { left: number; top: number; height: number }) {
  return (
    <View style={[styles.tree, { height, left, top }]}> 
      <View style={[styles.treeTop, { height: height * 0.72, width: height * 0.32 }]} />
      <View style={[styles.treeTrunk, { height: height * 0.36 }]} />
    </View>
  );
}

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <NavItem active icon={<CalendarDays color="#f8f6ee" size={19} strokeWidth={1.8} />} label="Today" />
      <NavItem icon={<ListTodo color="#20211f" size={21} strokeWidth={1.7} />} label="Tasks" />
      <NavItem icon={<Sprout color="#20211f" size={21} strokeWidth={1.7} />} label="Garden" />
      <NavItem icon={<Grid2X2 color="#20211f" size={20} strokeWidth={1.7} />} label="Plan" />
    </View>
  );
}

function NavItem({ active = false, icon, label }: { active?: boolean; icon: ReactNode; label: string }) {
  return (
    <Pressable style={styles.navItem}>
      <View style={[styles.navSymbol, active && styles.navSymbolActive]}>
        {icon}
      </View>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </Pressable>
  );
}

const mono = Platform.select({ ios: 'Menlo', default: 'monospace' });

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f4ed' },
  screen: { flex: 1, backgroundColor: '#f7f4ed' },
  scrollContent: { paddingBottom: 116 },
  header: { flexDirection: 'row', minHeight: 195, paddingTop: 26 },
  identityRail: {
    alignItems: 'center',
    borderRightColor: '#c5c0b6',
    borderRightWidth: StyleSheet.hairlineWidth,
    gap: 28,
    paddingTop: 7,
    width: 40,
  },
  identity: {
    color: '#1d1e1b',
    fontFamily: mono,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3.2,
    transform: [{ rotate: '-90deg' }],
    width: 132,
  },
  identityMeta: { color: '#3f5c4d', fontFamily: mono, fontSize: 9, letterSpacing: 1.5, marginTop: 36, transform: [{ rotate: '-90deg' }], width: 36 },
  headerMain: { flex: 1, paddingLeft: 20, paddingTop: 1 },
  titleLine: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' },
  title: { color: '#171816', fontSize: 60, fontWeight: '900', letterSpacing: -3.3, lineHeight: 66 },
  dateBlock: { alignItems: 'flex-start', marginRight: 4, paddingTop: 5, width: 52 },
  dateWeekday: { color: '#1d1e1b', fontFamily: mono, fontSize: 12, fontWeight: '700' },
  dateDay: { color: '#3c6953', fontFamily: mono, fontSize: 34, fontWeight: '500', lineHeight: 40 },
  dateMonth: { color: '#1d1e1b', fontFamily: mono, fontSize: 13, fontWeight: '700' },
  dateYear: { color: '#1d1e1b', fontFamily: mono, fontSize: 13, fontWeight: '700' },
  manifesto: { color: '#242522', fontFamily: mono, fontSize: 12, lineHeight: 18, marginTop: 9 },
  headerRule: { backgroundColor: '#3d6955', height: 1, marginTop: 17, width: '53%' },
  voiceButton: { alignItems: 'center', backgroundColor: '#416c56', borderRadius: 5, height: 46, justifyContent: 'center', marginRight: 19, marginTop: 6, width: 46 },
  progressSection: { gap: 14, paddingHorizontal: 25, paddingTop: 17 },
  progressCopyLine: { flexDirection: 'row', justifyContent: 'space-between' },
  monoLabel: { color: '#1b1d1a', fontFamily: mono, fontSize: 10, letterSpacing: 0.2 },
  progressMarks: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 1 },
  progressMark: { borderColor: '#9d9f97', borderWidth: 1, height: 9, width: 9 },
  progressMarkComplete: { backgroundColor: '#3e7259', borderColor: '#3e7259' },
  nextCard: { borderColor: '#6e7069', borderRadius: 5, borderWidth: 1, marginHorizontal: 25, marginTop: 26, overflow: 'hidden' },
  nextCardTop: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 21, paddingTop: 17 },
  nextKicker: { alignItems: 'center', flexDirection: 'row', gap: 8 },
  activeDot: { backgroundColor: '#2e7857', borderRadius: 4, height: 6, width: 6 },
  durationBadge: { alignItems: 'center', backgroundColor: '#3d7057', borderRadius: 2, flexDirection: 'row', gap: 7, paddingHorizontal: 8, paddingVertical: 6 },
  durationText: { color: '#f8f5ee', fontFamily: mono, fontSize: 10 },
  nextTitle: { color: '#171816', fontFamily: mono, fontSize: 17, letterSpacing: -0.4, marginHorizontal: 21, marginTop: 16 },
  nextBodyLine: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 21, paddingTop: 10 },
  nextDescription: { color: '#242522', fontFamily: mono, fontSize: 12, lineHeight: 18 },
  nextActions: { borderTopColor: '#b6b4ac', borderTopWidth: StyleSheet.hairlineWidth, flexDirection: 'row', marginTop: 20 },
  action: { alignItems: 'center', flex: 1, gap: 4, minHeight: 76, justifyContent: 'center' },
  actionLabel: { color: '#252723', fontFamily: mono, fontSize: 10 },
  afterLabel: { color: '#20211f', fontFamily: mono, fontSize: 12, letterSpacing: 2.1, marginLeft: 25, marginTop: 27 },
  rule: { backgroundColor: '#1d1e1c', height: 1, marginHorizontal: 25, marginTop: 9 },
  taskGroup: { borderBottomColor: '#969891', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal: 25, paddingBottom: 13, paddingTop: 16 },
  groupHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  groupTitleWrap: { alignItems: 'center', flexDirection: 'row', gap: 13 },
  groupTitle: { color: '#171816', fontFamily: mono, fontSize: 15 },
  groupRight: { alignItems: 'center', flexDirection: 'row', gap: 24 },
  groupCount: { color: '#20221f', fontFamily: mono, fontSize: 12 },
  taskList: { gap: 7, marginTop: 13 },
  taskRow: { alignItems: 'center', flexDirection: 'row', minHeight: 17 },
  taskNumber: { color: '#3d7058', fontFamily: mono, fontSize: 10, width: 37 },
  taskName: { color: '#272925', flex: 1, fontFamily: mono, fontSize: 11 },
  taskDuration: { color: '#77776f', fontFamily: mono, fontSize: 10, width: 57 },
  taskMore: { marginRight: 2, width: 23 },
  gardenCard: { borderBottomColor: '#6f716a', borderBottomWidth: StyleSheet.hairlineWidth, flexDirection: 'row', height: 190, marginTop: 4, overflow: 'hidden', paddingLeft: 25, paddingTop: 22 },
  gardenCopy: { zIndex: 2 },
  gardenHeadingLine: { alignItems: 'center', flexDirection: 'row', gap: 8 },
  gardenTitle: { color: '#1a1b19', fontFamily: mono, fontSize: 12, letterSpacing: 0.7 },
  gardenStatus: { backgroundColor: '#397055', height: 10, width: 10 },
  gardenMeta: { color: '#1d1e1b', fontFamily: mono, fontSize: 10, letterSpacing: 1, marginTop: 10 },
  gardenXp: { color: '#3d7057', fontFamily: mono, fontSize: 17, marginTop: 39 },
  gardenToday: { color: '#1d1e1b', fontFamily: mono, fontSize: 12, marginTop: 9 },
  gardenScene: { bottom: -7, height: 166, position: 'absolute', right: -6, width: 245 },
  gardenShadow: { backgroundColor: 'rgba(22, 25, 20, 0.17)', borderRadius: 70, bottom: 6, height: 38, position: 'absolute', right: 14, transform: [{ rotate: '-9deg' }], width: 184 },
  gardenBase: { backgroundColor: '#557a54', borderColor: '#44483c', borderWidth: 7, bottom: 16, height: 115, position: 'absolute', right: 27, transform: [{ rotate: '-18deg' }], width: 182 },
  pathOne: { backgroundColor: '#d8d1bb', height: 12, left: 64, position: 'absolute', top: 58, width: 73 },
  pathTwo: { backgroundColor: '#d8d1bb', height: 47, left: 96, position: 'absolute', top: 30, width: 13 },
  plant: { backgroundColor: '#89a56b', borderColor: '#3b613f', borderRadius: 99, borderWidth: 3, position: 'absolute' },
  tree: { alignItems: 'center', position: 'absolute', width: 34 },
  treeTop: { backgroundColor: '#2d5139', borderRadius: 35, position: 'absolute', top: 0 },
  treeTrunk: { backgroundColor: '#725943', bottom: 0, position: 'absolute', width: 7 },
  bottomNav: { alignItems: 'center', backgroundColor: '#faf8f1', borderTopColor: '#bab8af', borderTopWidth: StyleSheet.hairlineWidth, bottom: 0, flexDirection: 'row', height: 86, justifyContent: 'space-around', left: 0, paddingBottom: 5, position: 'absolute', right: 0 },
  navItem: { alignItems: 'center', flex: 1, gap: 5, justifyContent: 'center' },
  navSymbol: { alignItems: 'center', borderColor: '#20211f', borderRadius: 12, borderWidth: 1, height: 23, justifyContent: 'center', width: 23 },
  navSymbolActive: { backgroundColor: '#356b50', borderColor: '#356b50', borderRadius: 13 },
  navLabel: { color: '#222420', fontFamily: mono, fontSize: 11 },
  navLabelActive: { color: '#356b50', fontWeight: '700' },
});
