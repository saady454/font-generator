export interface WidgetCategory {
  id: string;
  label: string;
  icon: string;
}

export interface EmojiPackage {
  id: string;
  label: string;
  icon: string;
  emojis: string[];
}

export interface PlatformWidgetsConfig {
  ideasWidget: {
    title: string;
    description: string;
    badgeText?: string;
    categories: WidgetCategory[];
    suggestions: Record<string, string[]>;
    disclaimer: string;
  };
  symbolWidget: {
    title: string;
    description: string;
    inputLabel: string;
    placeholder: string;
    defaultValue: string;
    linkUrl: string;
    linkLabel: string;
  };
  emojiWidget: {
    title: string;
    description: string;
    badgeText?: string;
    packages: EmojiPackage[];
  };
}

export const PLATFORM_WIDGETS_DATA: Record<string, PlatformWidgetsConfig> = {
  // 1. INSTAGRAM
  instagram: {
    ideasWidget: {
      title: 'Instagram Bio-Ideen Generator',
      description: 'Wähle deine Instagram-Nische und kopiere strukturierte, für das 150-Zeichen-Limit optimierte Bio-Vorlagen:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Bio-Ideen sind Vorschläge — passe sie an deinen eigenen Stil an',
      categories: [
        { id: 'reisen', label: 'Reisen', icon: '✈️' },
        { id: 'gaming', label: 'Gaming', icon: '🎮' },
        { id: 'fitness', label: 'Fitness', icon: '🏋️' },
        { id: 'fotografie', label: 'Fotografie', icon: '📸' },
        { id: 'business', label: 'Business', icon: '💼' },
        { id: 'mode', label: 'Mode', icon: '👗' },
      ],
      suggestions: {
        reisen: [
          '✈️ ᴛʀᴀᴠᴇʟ • ᴀᴅᴠᴇɴᴛᴜʀᴇ • ᴠɪʙᴇs\n📍 𝟤𝟧+ ʟäɴᴅᴇʀ ᴇʀᴋᴜɴᴅᴇᴛ\n🌅 sᴀᴍᴍʟᴇ ᴍᴏᴍᴇɴᴛᴇ, ɴɪᴄʜᴛ ᴅɪɴɢᴇ\n👇 ɴᴇᴜᴇʀ ʀᴇɪsᴇ-ᴠʟᴏɢ',
          '🌍 ᴏɴ ᴀ ᴊᴏᴜʀɴᴇʏ ᴀʀᴏᴜɴᴅ ᴛʜᴇ ɢʟᴏʙᴇ\n📸 ʀᴇɪsᴇғᴏᴛᴏɢʀᴀғɪᴇ & ɢᴇʜᴇɪᴍᴛɪᴘᴘs\n🌴 ʟɪғᴇ ɪs ʙᴇᴛᴛᴇʀ ɪɴ ᴘᴀsᴛᴇʟ\n📍 ɴᴇxᴛ sᴛᴏᴘ: ɪᴛᴀʟɪᴇɴ 🇮🇹',
          '🗺️ ᴡᴀɴᴅᴇʀʟᴜsᴛ & ғᴇʀɴᴡᴇʜ\n🎒 ᴍɪᴛ ᴅᴇᴍ ʀᴜᴄᴋsᴀᴄᴋ ᴜɴᴛᴇʀᴡᴇɢs\n✨ ᴅɪᴇ ᴡᴇʟᴛ ᴍɪᴛ ᴍᴇɪɴᴇɴ ᴀᴜɢᴇɴ sᴇʜᴇɴ\n💌 ᴋᴏʟʟᴀʙs: ᴅᴍ',
          '🌅 ᴄʜᴀsɪɴɢ sᴜɴsᴇᴛs ᴡᴏʀʟᴅᴡɪᴅᴇ\n🛫 𝟣𝟢𝟢% ʀᴇɪsᴇғɪᴇʙᴇʀ • 𝟢% ʜᴇɪᴍᴡᴇʜ\n💡 ᴛɪᴘᴘs ғüʀ ʟᴏᴡ-ʙᴜᴅɢᴇᴛ ᴛʀɪᴘs\n👇 ᴢᴜ ᴍᴇɪɴᴇᴍ ʀᴇɪsᴇʙʟᴏɢ',
          '🏖️ ᴠɪᴛᴀᴍɪɴ sᴇᴀ & ʙᴇᴀᴄʜ ᴠɪʙᴇs\n🛵 ʀᴏᴀᴅᴛʀɪᴘs ᴅᴜʀᴄʜ ᴇᴜʀᴏᴘᴀ\n✨ ᴇɴᴛᴅᴇᴄᴋᴇ ᴅɪᴇ sᴄʜöɴsᴛᴇɴ ᴏʀᴛᴇ\n📩 ᴄᴏɴᴛᴀᴄᴛ@ᴛʀᴀᴠᴇʟ.ᴅᴇ',
        ],
        gaming: [
          '🎮 ɢᴀᴍᴇʀ • sᴛʀᴇᴀᴍᴇʀ • ᴄʀᴇᴀᴛᴏʀ\n🏆 ɢʀɪɴᴅ ᴛᴏ ᴜɴʀᴇᴀʟ | ᴛᴏᴘ 𝟧𝟢𝟢\n🕹️ ᴅᴀɪʟʏ ᴄʟɪᴘs & ʜɪɢʜʟɪɢʜᴛs\n🔴 ʟɪᴠᴇ ᴀᴜғ ᴛᴡɪᴛᴄʜ: 𝟤𝟢 ᴜʜʀ',
          '👾 ᴘᴄ & ᴄᴏɴsᴏʟᴇ ᴇɴᴛʜᴜsɪᴀsᴛ\n🎧 ɢᴀᴍɪɴɢ ɪs ᴍʏ ᴛʜᴇʀᴀᴘʏ\n⚡ ᴄᴜsᴛᴏᴍ sᴇᴛᴜᴘ & ᴛᴇᴄʜ ʀᴇᴠɪᴇᴡs\n👇 ᴢᴜ ᴍᴇɪɴᴇᴍ ᴅɪsᴄᴏʀᴅ-sᴇʀᴠᴇʀ',
          '🎯 ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴇ ɢᴀᴍɪɴɢ & ᴇsᴘᴏʀᴛs\n💥 ᴄʟᴜᴛᴄʜ ᴏʀ ᴋɪᴄᴋ\n🕹️ ᴠᴀʟᴏʀᴀɴᴛ | ᴄs𝟤 | ᴡᴀʀᴢᴏɴᴇ\n🏆 ᴛᴇᴀᴍ: @ᴠᴏɪᴅ_ᴇsᴘᴏʀᴛs',
          '🕹️ ʀᴇᴛʀᴏ & ɴᴇxᴛ-ɢᴇɴ ɢᴀᴍɪɴɢ\n☕ ᴋᴀғғᴇᴇ, ᴄᴏɴᴛʀᴏʟʟᴇʀ & ɢᴏᴏᴅ ᴠɪʙᴇs\n🎬 ᴡöᴄʜᴇɴᴛʟɪᴄʜ ɴᴇᴜᴇ ᴠɪᴅᴇᴏs\n👇 ɢᴀᴍɪɴɢ sᴇᴛᴜᴘ ʟɪɴᴋs',
          '🏆 ɢᴀᴍɪɴɢ ᴄʟɪᴘs & ғᴜɴɴʏ ᴍᴏᴍᴇɴᴛs\n🔥 𝟣𝟢𝟢% sᴋɪʟʟ • 𝟢% ʟᴜᴄᴋ\n🎮 ᴊᴏɪɴ ᴅɪᴇ ᴄᴏᴍᴍᴜɴɪᴛʏ\n📩 ʙᴜsɪɴᴇss: ɢᴀᴍᴇʀ@ᴍᴀɪʟ.ᴅᴇ',
        ],
        fitness: [
          '🏋️‍♂️ ɢʏᴍ • ᴍᴏᴛɪᴠᴀᴛɪᴏɴ • ʟɪғᴇsᴛʏʟᴇ\n🥗 ɢᴇsᴜɴᴅᴇ ᴇʀɴäʜʀᴜɴɢ & ᴛʀᴀɪɴɪɴɢ\n🥇 𝟣% ʙᴇssᴇʀ ᴊᴇᴅᴇɴ ᴛᴀɢ\n👇 ᴋᴏsᴛᴇɴʟᴏsᴇʀ ᴛʀᴀɪɴɪɴɢsᴘʟᴀɴ',
          '💪 ғɪᴛɴᴇss ᴄᴏᴀᴄʜ & ᴀᴛʜʟᴇᴛᴇ\n⚡ ʙᴜɪʟᴅ ʏᴏᴜʀ ʙᴇsᴛ ᴠᴇʀsɪᴏɴ\n🥑 ᴇᴀsʏ ᴍᴇᴀʟ ᴘʀᴇᴘ ɪᴅᴇᴇɴ\n📩 𝟣:𝟣 ᴄᴏᴀᴄʜɪɴɢ ᴀɴғʀᴀɢᴇɴ',
          '🏃‍♀️ ʀᴜɴɴɪɴɢ • ʜʏʀᴏx • ғɪᴛɴᴇss\n⏱️ ᴠᴏᴍ ᴄᴏᴜᴄʜ-ᴘᴏᴛᴀᴛᴏ ᴢᴜᴍ ᴍᴀʀᴀᴛʜᴏɴ\n✨ ɢʟᴀᴜʙ ᴀɴ ᴅᴇɪɴᴇ ᴢɪᴇʟᴇ\n👇 ᴍᴇɪɴᴇ ʟɪᴇʙʟɪɴɢs-sᴜᴘᴘs',
          '🧘‍♀️ ʏᴏɢᴀ • ᴍɪɴᴅғᴜʟɴᴇss • ʙᴀʟᴀɴᴄᴇ\n🌿 ɪɴɴᴇʀᴇ ʀᴜʜᴇ & ᴋöʀᴘᴇʀɢᴇғüʜʟ\n🍵 ᴛäɢʟɪᴄʜᴇ ʀᴏᴜᴛɪɴᴇɴ ғüʀ ᴍᴇʜʀ ᴇɴᴇʀɢɪᴇ\n💌 ᴡᴏʀᴋsʜᴏᴘs & ʀᴇᴛʀᴇᴀᴛs',
          '🥊 ʜɪɪᴛ & ᴄᴀʟɪsᴛʜᴇɴɪᴄs\n🔥 ɴᴏ ᴇxᴄᴜsᴇs • ᴊᴜsᴛ ʀᴇsᴜʟᴛs\n🏋️ ᴛʀᴀɪɴɪɴɢs-ᴛɪᴘᴘs ғüʀ ᴢᴜʜᴀᴜsᴇ\n👇 ᴍᴇɪɴ 𝟥𝟢-ᴛᴀɢᴇ ɢᴜɪᴅᴇ',
        ],
        fotografie: [
          '📸 ᴠɪsᴜᴀʟ sᴛᴏʀʏᴛᴇʟʟᴇʀ\n🎞️ ᴘᴏʀᴛʀᴀɪᴛ & sᴛʀᴇᴇᴛ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ\n🌇 ᴄᴀᴘᴛᴜʀɪɴɢ ʟɪɢʜᴛ & ᴇᴍᴏᴛɪᴏɴs\n📍 ʙᴇʀʟɪɴ | sᴏɴʏ ᴀ𝟩ɪᴠ',
          '✨ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ & ᴠɪᴅᴇᴏɢʀᴀᴘʜʏ\n🎨 ʟɪɢʜᴛʀᴏᴏᴍ ᴘʀᴇsᴇᴛs & ᴄᴏʟᴏʀ ɢʀᴀᴅɪɴɢ\n🎬 ᴅɪᴇ ᴡᴇʟᴛ ɪɴ 𝟦ᴋ ᴄɪɴᴇᴍᴀᴛɪᴄ\n👇 ᴍᴇɪɴᴇ ᴘʀᴇsᴇᴛs ʜᴇʀᴜɴᴛᴇʀʟᴀᴅᴇɴ',
          '📷 ʟᴀɴᴅsᴄʜᴀғᴛs- & ɴᴀᴛᴜʀғᴏᴛᴏɢʀᴀғɪᴇ\n🌲 ᴀʟᴘᴇɴ • ᴡäʟᴅᴇʀ • sᴇᴇɴ\n🏔️ ᴍᴏᴜɴᴛᴀɪɴ ʟᴏᴠᴇʀ ᴀɴᴅ ʜɪᴋᴇʀ\n💌 ᴘʀɪɴᴛ-ᴀɴғʀᴀɢᴇɴ ᴘᴇʀ ᴅᴍ',
          '🎞️ 𝟥𝟧ᴍᴍ ᴀɴᴀʟᴏɢ & ᴀᴇsᴛʜᴇᴛɪᴄ\n☕ ɴᴏsᴛᴀʟɢɪᴇ • ᴋᴏʀɴ • ᴇᴄʜᴛᴇ ᴍᴏᴍᴇɴᴛᴇ\n📍 ʜᴀᴍʙᴜʀɢ / ᴡᴏʀʟᴅᴡɪᴅᴇ\n👇 ᴢᴜ ᴍᴇɪɴᴇᴍ ᴘᴏʀᴛғᴏʟɪᴏ',
          '📸 ʜᴏᴄʜᴢᴇɪᴛs- & ᴇᴠᴇɴᴛғᴏᴛᴏɢʀᴀғɪɴ\n💍 ᴇᴄʜᴛᴇ ᴇᴍᴏᴛɪᴏɴᴇɴ ғᴇsᴛʜᴀʟᴛᴇɴ\n✨ ᴇᴜʀᴇ ʟɪᴇʙᴇsɢᴇsᴄʜɪᴄʜᴛᴇ ɪɴ ʙɪʟᴅᴇʀɴ\n📩 ʙᴏᴏᴋɪɴɢs 𝟤𝟢𝟤𝟦/𝟤𝟢𝟤𝟧 ᴏғғᴇɴ',
        ],
        business: [
          '💼 ᴇɴᴛʀᴇᴘʀᴇɴᴇᴜʀ & ᴄʀᴇᴀᴛᴏʀ\n🚀 ᴠᴏᴍ sɪᴅᴇ-ʜᴜsᴛʟᴇ ᴢᴜᴍ 𝟨-sᴛᴇʟʟɪɢᴇɴ ʙᴜsɪɴᴇss\n📈 ᴛɪᴘᴘs ᴢᴜ ᴍᴀʀᴋᴇᴛɪɴɢ & sᴄᴀʟɪɴɢ\n👇 ᴋᴏsᴛᴇɴʟᴏsᴇs ᴇ-ʙᴏᴏᴋ',
          '💡 ᴏɴʟɪɴᴇ-ᴍᴀʀᴋᴇᴛɪɴɢ & ʙʀᴀɴᴅɪɴɢ\n🎯 ᴍᴇʜʀ ʀᴇɪᴄʜᴡᴇɪᴛᴇ & ᴋᴜɴᴅᴇɴ ɢᴇᴡɪɴɴᴇɴ\n📊 𝟣𝟢𝟢+ ᴇʀғᴏʟɢʀᴇɪᴄʜᴇ ᴋᴜɴᴅᴇɴ-ᴘʀᴏᴊᴇᴋᴛᴇ\n📩 ᴢᴜᴍ sᴛʀᴀᴛᴇɢɪᴇɢᴇsᴘʀäᴄʜ',
          '💻 ᴇ-ᴄᴏᴍᴍᴇʀᴄᴇ & ᴅɪɢɪᴛᴀʟ ᴘʀᴏᴅᴜᴄᴛs\n💰 ᴘᴀssɪᴠᴇs ᴇɪɴᴋᴏᴍᴍᴇɴ ᴀᴜғʙᴀᴜᴇɴ\n🧠 ᴍɪɴᴅsᴇᴛ • ғɪɴᴀɴᴢᴇɴ • ғᴏᴋᴜs\n👇 ᴡᴇʀᴅᴇ ᴛᴇɪʟ ᴅᴇʀ ᴍᴀsᴛᴇʀᴍɪɴᴅ',
          '🚀 sᴛᴀʀᴛᴜᴘ ғᴏᴜɴᴅᴇʀ | ᴄᴇᴏ @ʙʀᴀɴᴅ\n🏆 ᴡɪʀ ʀᴇᴠᴏʟᴜᴛɪᴏɴɪᴇʀᴇɴ ᴅɪᴇ ʙʀᴀɴᴄʜᴇ\n🌱 sᴜsᴛᴀɪɴᴀʙʟᴇ ᴛᴇᴄʜ & ɪɴɴᴏᴠᴀᴛɪᴏɴ\n👇 ᴡɪʀ sᴜᴄʜᴇɴ ᴛᴀʟᴇɴᴛᴇ (ʜɪʀɪɴɢ!)',
          '📱 sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ᴀɢᴇɴᴛᴜʀ\n🎨 ᴡɪʀ ᴍᴀᴄʜᴇɴ ᴅᴇɪɴᴇ ᴍᴀʀᴋᴇ sɪᴄʜᴛʙᴀʀ\n📈 ᴄᴏɴᴛᴇɴᴛ, ᴀᴅs & sᴛᴏʀʏᴛᴇʟʟɪɴɢ\n📩 ᴀɴғʀᴀɢᴇɴ: ʜᴇʟʟᴏ@ᴀɢᴇɴᴄʏ.ᴅᴇ',
        ],
        mode: [
          '👗 ғᴀsʜɪᴏɴ • ᴀᴇsᴛʜᴇᴛɪᴄ • ᴏᴏᴛᴅ\n✨ ᴍɪɴɪᴍᴀʟɪsᴛ sᴛʏʟᴇ & ᴄᴀᴘsᴜʟᴇ ᴡᴀʀᴅʀᴏʙᴇ\n📍 ᴍüɴᴄʜᴇɴ | ᴅᴀɪʟʏ ᴏᴜᴛғɪᴛ ɪɴsᴘᴏ\n👇 ᴀʟʟᴇ ᴏᴜᴛғɪᴛs ᴢᴜᴍ ɴᴀᴄʜsʜᴏᴘᴘᴇɴ',
          '👠 sᴛʀᴇᴇᴛᴡᴇᴀʀ & ᴠɪɴᴛᴀɢᴇ ғɪɴᴅs\n🎨 ᴋᴜʀᴀᴛɪᴇʀᴛᴇ ᴏᴜᴛғɪᴛs & ɪɴsᴘɪʀᴀᴛɪᴏɴ\n🕶️ sᴛʏʟᴇ ɪs ᴀ ᴡᴀʏ ᴛᴏ sᴀʏ ᴡʜᴏ ʏᴏᴜ ᴀʀᴇ\n💌 ᴋᴏʟʟᴀʙs & ᴘʀ: ᴅᴍ',
          '✨ ʙᴇᴀᴜᴛʏ, sᴋɪɴᴄᴀʀᴇ & ғᴀsʜɪᴏɴ\n💄 ᴇʜʀʟɪᴄʜᴇ ʀᴇᴠɪᴇᴡs & ᴅᴏᴜᴘᴇ-ᴛɪᴘᴘs\n🌿 ᴄʟᴇᴀɴ ʙᴇᴀᴜᴛʏ ᴇɴᴛʜᴜsɪᴀsᴛ\n👇 ᴍᴇɪɴᴇ ᴀᴋᴛᴜᴇʟʟᴇɴ ғᴀᴠᴏʀɪᴛᴇɴ',
          '🧥 ᴍᴇɴ\'s sᴛʏʟᴇ & ɢʀᴏᴏᴍɪɴɢ\n👔 ᴄʟᴀssɪᴄ ᴍᴇᴇᴛs ᴍᴏᴅᴇʀɴ\n💡 ᴛɪᴘᴘs ғüʀ ᴅᴀs ᴘᴇʀғᴇᴋᴛᴇ ᴏᴜᴛғɪᴛ\n📩 ʙᴜsɪɴᴇss: sᴛʏʟᴇ@ᴍᴀɪʟ.ᴅᴇ',
          '👒 sʟᴏᴡ ғᴀsʜɪᴏɴ & ғᴀɪʀ ʙʀᴀɴᴅs\n🧵 ǫᴜᴀʟɪᴛäᴛ sᴛᴀᴛᴛ ǫᴜᴀɴᴛɪᴛäᴛ\n✨ ᴛɪᴘᴘs ғüʀ ɴᴀᴄʜʜᴀʟᴛɪɢᴇs sʜᴏᴘᴘᴇɴ\n👇 ᴍᴇɪɴ sᴜsᴛᴀɪɴᴀʙʟᴇ sᴛʏʟᴇ ɢᴜɪᴅᴇ',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Umrahme deinen Instagram-Namen oder Bio-Titel mit stilvollen Aesthetic-Rahmen und Ornamenten:',
      inputLabel: 'Dein Instagram Name / Wort:',
      placeholder: 'Dein Instagram Name',
      defaultValue: 'Instagram Name',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere perfekt kuratierte Emoji-Reihen mit 1 Klick für deine Instagram Bio, Storys oder Highlights:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'reisen', label: 'Reisen', icon: '✈️', emojis: ['✈️', '🌴', '🎒', '🗺️', '🏖️', '🌅'] },
        { id: 'gaming', label: 'Gaming', icon: '🎮', emojis: ['🎮', '🕹️', '🎧', '👾', '⚡', '🏆'] },
        { id: 'fitness', label: 'Fitness', icon: '🏋️', emojis: ['🏋️‍♂️', '💪', '🏃‍♀️', '🥗', '🥇', '🥑'] },
        { id: 'fotografie', label: 'Fotografie', icon: '📸', emojis: ['📸', '📷', '🎞️', '🌇', '🎬', '✨'] },
        { id: 'business', label: 'Business', icon: '💼', emojis: ['💼', '📈', '💻', '💰', '📊', '🚀'] },
        { id: 'mode', label: 'Mode', icon: '👗', emojis: ['👗', '👠', '💄', '🛍️', '✨', '🕶️'] },
        { id: 'liebe', label: 'Liebe', icon: '💖', emojis: ['💖', '🌹', '💌', '🧸', '✨', '🥰'] },
        { id: 'natur', label: 'Natur', icon: '🌿', emojis: ['🌿', '🌸', '🍃', '🌻', '🌲', '🦋'] },
      ],
    },
  },

  // 2. WHATSAPP
  whatsapp: {
    ideasWidget: {
      title: 'WhatsApp Status-Ideen Generator',
      description: 'Finde kurze, ausdrucksstarke Sprüche für deinen 139-Zeichen WhatsApp Info- und Status-Text:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Status-Ideen sind Vorschläge — passe sie an deinen persönlichen Stil an',
      categories: [
        { id: 'alltag', label: 'Alltag', icon: '☕' },
        { id: 'motivation', label: 'Motivation', icon: '⚡' },
        { id: 'humor', label: 'Humor', icon: '😂' },
        { id: 'liebe', label: 'Liebe', icon: '💖' },
        { id: 'business', label: 'Business', icon: '💼' },
        { id: 'feiertage', label: 'Feiertage', icon: '🎉' },
      ],
      suggestions: {
        alltag: [
          '☕ ᴇʀsᴛ ᴋᴀғғᴇᴇ, ᴅᴀɴɴ ᴅɪᴇ ᴡᴇʟᴛ ʀᴇᴛᴛᴇɴ ✨',
          '🌿 ɪɴ ᴅᴇʀ ʀᴜʜᴇ ʟɪᴇɢᴛ ᴅɪᴇ ᴋʀᴀғᴛ 🕊️',
          '🔋 ᴀᴋᴋᴜ: 𝟣𝟢𝟢% • ᴍᴏᴛɪᴠᴀᴛɪᴏɴ: ʟäᴅᴛ ɴᴏᴄʜ ⏳',
          '🚶‍♂️ ᴍɪᴛ ᴊᴇᴅᴇᴍ sᴄʜʀɪᴛᴛ ᴅᴇᴍ ᴢɪᴇʟ ɴäʜᴇʀ 🌟',
          '🎧 ᴍᴜsɪᴋ ᴀɴ, ᴡᴇʟᴛ ᴀᴜs 🎶',
        ],
        motivation: [
          '⚡ ᴍᴀᴄʜ ᴅᴇɪɴᴇ ᴛʀäᴜᴍᴇ ᴢᴜ ᴅᴇɪɴᴇᴍ ᴀʟʟᴛᴀɢ 🚀',
          '🏆 ᴡᴇʀ ᴋäᴍᴘғᴛ, ᴋᴀɴɴ ᴠᴇʀʟɪᴇʀᴇɴ. ᴡᴇʀ ɴɪᴄʜᴛ ᴋäᴍᴘғᴛ, ʜᴀᴛ sᴄʜᴏɴ ᴠᴇʀʟᴏʀᴇɴ 💪',
          '🔥 ғᴏᴋᴜs ᴀᴜғ ᴅᴀs, ᴡᴀs ᴅɪᴄʜ ᴡᴇɪᴛᴇʀʙʀɪɴɢᴛ 🎯',
          '🥇 ᴊᴇᴅᴇʀ ᴛᴀɢ ɪsᴛ ᴇɪɴᴇ ɴᴇᴜᴇ ᴄʜᴀɴᴄᴇ 🌅',
          '💎 ᴅʀᴜᴄᴋ ᴇʀᴢᴇᴜɢᴛ ᴅɪᴀᴍᴀɴᴛᴇɴ ✨',
        ],
        humor: [
          '😜 ɪᴄʜ ʙɪɴ ɴɪᴄʜᴛ ғᴀᴜʟ, ɪᴄʜ ʙɪɴ ɪᴍ ᴇɴᴇʀɢɪᴇsᴘᴀʀᴍᴏᴅᴜs 🛋️',
          '🍕 ᴍᴇɪɴᴇ ʟɪᴇʙʟɪɴɢs-ʏᴏɢᴀ-ᴘᴏsɪᴛɪᴏɴ: ᴅᴇʀ ᴄᴏᴜᴄʜ-ʟɪᴇɢᴇʀ 😂',
          '🤷‍♂️ ɪᴄʜ ʜᴀʙᴇ ᴋᴇɪɴᴇ ᴍᴀᴋᴇɴ, ᴅᴀs sɪɴᴅ sᴘᴇᴄɪᴀʟ ᴇғғᴇᴄᴛs ✨',
          '⏰ ᴍᴇɪɴ ᴡᴇᴄᴋᴇʀ ᴜɴᴅ ɪᴄʜ ғüʜʀᴇɴ ᴇɪɴᴇ ᴛᴏxɪsᴄʜᴇ ʙᴇᴢɪᴇʜᴜɴɢ 😴',
          '🍫 sᴄʜᴏᴋᴏʟᴀᴅᴇ ᴢäʜʟᴛ ᴀʟs ɢᴇᴍüsᴇ — ᴋᴏᴍᴍᴛ ᴊᴀ ᴠᴏɴ ᴇɪɴᴇʀ ᴘғʟᴀɴᴢᴇ 🥦',
        ],
        liebe: [
          '💖 ᴅᴜ ʙɪsᴛ ᴍᴇɪɴ ʟɪᴇʙʟɪɴɢsɢᴇᴅᴀɴᴋᴇ ✨',
          '🌹 ʟɪᴇʙᴇ ɪsᴛ ɴɪᴄʜᴛ ᴅᴀs, ᴡᴀs ᴍᴀɴ ᴇʀᴡᴀʀᴛᴇᴛ, sᴏɴᴅᴇʀɴ ᴡᴀs ᴍᴀɴ ɢɪʙᴛ 💕',
          '🧸 ᴢᴜsᴀᴍᴍᴇɴ ɪsᴛ ᴍᴇɪɴ ʟɪᴇʙʟɪɴɢsᴏʀᴛ 🏡',
          '✨ ᴅᴇɪɴ ʟäᴄʜᴇʟɴ ɪsᴛ ᴍᴇɪɴ ᴢᴜʜᴀᴜsᴇ 🤍',
          '💌 ɪɴ ᴅᴇɪɴᴇʀ ɴäʜᴇ ɪsᴛ ᴅɪᴇ ᴡᴇʟᴛ ᴘᴇʀғᴇᴋᴛ 🌸',
        ],
        business: [
          '💼 ᴀᴋᴛᴜᴇʟʟ ɪᴍ ᴍᴇᴇᴛɪɴɢ • ʙɪᴛᴛᴇ ɴᴜʀ ᴅʀɪɴɢᴇɴᴅᴇ ɴᴀᴄʜʀɪᴄʜᴛᴇɴ ⏳',
          '📊 ʙᴜsɪɴᴇss ʜᴏᴜʀs: 𝟢𝟫:𝟢𝟢 – 𝟣𝟪:𝟢𝟢 ᴜʜʀ 📞',
          '🚀 ʙᴜɪʟᴅɪɴɢ ᴛʜᴇ ғᴜᴛᴜʀᴇ • ᴏғғɪᴄɪᴀʟ ᴄᴏɴᴛᴀᴄᴛ 💼',
          '📧 ʙᴇɪ ᴅʀɪɴɢᴇɴᴅᴇɴ ᴀɴʟɪᴇɢᴇɴ: ᴇ-ᴍᴀɪʟ sᴇɴᴅᴇɴ 📩',
          '💻 ᴏɴʟɪɴᴇ & ᴇʀʀᴇɪᴄʜʙᴀʀ ғüʀ ᴋᴜɴᴅᴇɴ-ᴀɴғʀᴀɢᴇɴ 📈',
        ],
        feiertage: [
          '🎄 ғʀᴏʜᴇ ᴡᴇɪʜɴᴀᴄʜᴛᴇɴ & ᴇɪɴᴇ ʙᴇsɪɴɴʟɪᴄʜᴇ ᴢᴇɪᴛ 🎁',
          '🎆 ɢᴜᴛᴇɴ ʀᴜᴛsᴄʜ ɪɴs ɴᴇᴜᴇ ᴊᴀʜʀ! 𝟤𝟢𝟤𝟧 🥂',
          '🐰 ғʀᴏʜᴇ ᴏsᴛᴇʀɴ & sᴄʜöɴᴇ ғᴇɪᴇʀᴛᴀɢᴇ 🌷',
          '🎃 ʜᴀᴘᴘʏ ʜᴀʟʟᴏᴡᴇᴇɴ! 👻 🍬',
          '🎉 ᴡᴏᴄʜᴇɴᴇɴᴅᴇ! ᴀᴜғ ᴅɪᴇ ɢᴜᴛᴇɴ ᴢᴇɪᴛᴇɴ 🥳',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Gestalte deinen WhatsApp Namen, Status oder Info-Spruch mit auffälligen Klammern und Rahmen:',
      inputLabel: 'Dein WhatsApp Kontaktname / Spruch:',
      placeholder: 'Dein Kontaktname',
      defaultValue: 'WhatsApp Status',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere thematische Emoji-Sets für deinen WhatsApp Chat, Info-Status oder Gruppenbeschreibungen:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'alltag', label: 'Alltag', icon: '☕', emojis: ['☕', '🏠', '🚶‍♂️', '🎧', '✨', '🔋'] },
        { id: 'motivation', label: 'Motivation', icon: '⚡', emojis: ['⚡', '💪', '🏆', '🔥', '🥇', '🚀'] },
        { id: 'humor', label: 'Humor', icon: '😂', emojis: ['😂', '😜', '🍕', '🛋️', '🍫', '🤷‍♂️'] },
        { id: 'liebe', label: 'Liebe', icon: '💖', emojis: ['💖', '🌹', '💌', '🧸', '💕', '🥰'] },
        { id: 'business', label: 'Business', icon: '💼', emojis: ['💼', '📊', '💻', '📞', '📈', '📩'] },
        { id: 'feiertage', label: 'Feiertage', icon: '🎉', emojis: ['🎉', '🎄', '🎆', '🥂', '🎁', '🥳'] },
      ],
    },
  },

  // 3. DISCORD
  discord: {
    ideasWidget: {
      title: 'Discord Nickname-Ideen Generator',
      description: 'Wähle deinen Server-Vibe und kopiere stylische Nicknames, Clantags und Status-Zeilen:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Nickname-Ideen sind Vorschläge — passe sie an deinen Server-Stil an',
      categories: [
        { id: 'gaming', label: 'Gaming', icon: '🎮' },
        { id: 'anime', label: 'Anime', icon: '⛩️' },
        { id: 'chill', label: 'Chill', icon: '🌙' },
        { id: 'sarkastisch', label: 'Sarkastisch', icon: '💀' },
        { id: 'kreativ', label: 'Kreativ', icon: '✨' },
        { id: 'community', label: 'Community', icon: '👑' },
      ],
      suggestions: {
        gaming: [
          '꧁༺ ѕнα∂σω_кηιgнт ༻꧂',
          '⚡ ᴠᴏɪᴅ // ɴᴏ sᴄᴏᴘᴇ 🎯',
          '【 ɢʜᴏsᴛ_ᴘʟᴀʏᴇʀ 】🏆',
          '『 ᴘʜᴏᴇɴɪx_ʀɪsɪɴɢ 』🔥',
          '┊ 𓆩 ɴᴇᴏɴ_ᴠᴘʀ 𓆪 ┊ 🕹️',
        ],
        anime: [
          '⛩️ ᴋᴇɴᴊɪ • 浪人 ⚔️',
          '🌸 ᴋᴀᴡᴀɪɪ_ᴅʀᴇᴀᴍᴇʀ ✨',
          '༺ sʜɪɴɪɢᴀᴍɪ ༻ 🌙',
          '『 ᴜᴄʜɪʜᴀ_ᴠɪʙᴇs 』👁️',
          '⋆｡°✩ ᴛᴏᴋʏᴏ_ɢʜᴏᴜʟ ✩°｡⋆',
        ],
        chill: [
          '🌙 ᴍᴏᴏɴʟɪɢʜᴛ // ᴠɪʙɪɴɢ ☕',
          '☁️ ʟᴏ-ғɪ_ᴅʀᴇᴀᴍs 🎧',
          '✨ ɴᴏᴄᴛᴜʀɴᴀʟ_sᴏᴜʟ 🌿',
          '░▒▓ ᴄʜɪʟʟ_ᴢᴏɴᴇ ▓▒░',
          '┊ 𓆩 sᴛᴀʀɢᴀᴢᴇʀ 𓆪 ┊ ⭐',
        ],
        sarkastisch: [
          '💀 𝟦𝟢𝟦_sᴋɪʟʟ_ɴᴏᴛ_ғᴏᴜɴᴅ 🤷‍♂️',
          '🤡 ᴄᴇᴏ ᴏғ ʙᴀᴅ ᴅᴇᴄɪsɪᴏɴs 📉',
          '⚠️ ɴᴏᴛ_ʟɪsᴛᴇɴɪɴɢ // ᴀғᴋ 💤',
          '『 ᴘʀᴏғᴇssɪᴏɴᴀʟ_ғᴀɪʟᴇʀ 』🗑️',
          '☠️ ᴛᴏᴏ_ᴛɪʀᴇᴅ_ᴛᴏ_ᴄᴀʀᴇ 🛋️',
        ],
        kreativ: [
          '✨ ᴄʏʙᴇʀ_ᴀʀᴛɪsᴛ 🎨',
          '✦ ᴠɪsᴜᴀʟ_ɴᴏᴠᴀ ✦',
          '꧁ ᴋᴏsᴍɪsᴄʜᴇʀ_ғᴜɴᴋᴇ ꧂',
          '░ ᴘɪxᴇʟ_ᴄʀᴀғᴛᴇʀ ░',
          '༺ ᴀᴇsᴛʜᴇᴛɪᴄ_ᴍɪɴᴅ ༻ 💎',
        ],
        community: [
          '👑 sᴇʀᴠᴇʀ_ᴏᴡɴᴇʀ // ᴠᴏɪᴅ 🛡️',
          '🛡️ ᴍᴏᴅᴇʀᴀᴛᴏʀ • ᴀʟᴡᴀʏs ᴡᴀᴛᴄʜɪɴɢ 👀',
          '💎 ᴠɪᴘ_sᴜᴘᴘᴏʀᴛᴇʀ ✨',
          '📢 ᴄᴏᴍᴍᴜɴɪᴛʏ_ʟᴇᴀᴅ 💬',
          '⭐ ᴠᴇᴛᴇʀᴀɴ_ᴍᴇᴍʙᴇʀ 🏆',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Kombiniere deinen Discord Server-Namen, Kanal-Titel oder Nickname mit Gaming-Klammern und Boxen:',
      inputLabel: 'Dein Discord Nickname / Channel:',
      placeholder: 'Dein Nickname',
      defaultValue: 'Discord Nickname',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere strukturierte Emoji-Pakete für Discord-Kanäle, Server-Rollen und Statusmeldungen:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'gaming', label: 'Gaming', icon: '🎮', emojis: ['🎮', '🕹️', '🎧', '👾', '⚡', '🏆'] },
        { id: 'anime', label: 'Anime', icon: '⛩️', emojis: ['⛩️', '🌸', '⚔️', '🌙', '👁️', '✨'] },
        { id: 'chill', label: 'Chill', icon: '🌙', emojis: ['🌙', '☁️', '🎧', '☕', '🌿', '⭐'] },
        { id: 'community', label: 'Community', icon: '👑', emojis: ['👑', '🛡️', '💬', '📢', '💎', '🏆'] },
        { id: 'musik', label: 'Musik', icon: '🎵', emojis: ['🎵', '🎶', '🎧', '🎸', '🎹', '🎤'] },
        { id: 'kunst', label: 'Kunst', icon: '🎨', emojis: ['🎨', '🖌️', '✨', '💎', '🎭', '🌌'] },
      ],
    },
  },

  // 4. FACEBOOK
  facebook: {
    ideasWidget: {
      title: 'Facebook Status-Ideen Generator',
      description: 'Wähle die passende Kategorie für informative, ansprechende Beiträge und Profil-Infos auf Facebook:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Status-Ideen sind Vorschläge — passe sie an deine Seite oder dein Profil an',
      categories: [
        { id: 'familie', label: 'Familie', icon: '🏡' },
        { id: 'reisen', label: 'Reisen', icon: '🌍' },
        { id: 'business', label: 'Business', icon: '💼' },
        { id: 'feiertage', label: 'Feiertage', icon: '🎉' },
        { id: 'motivation', label: 'Motivation', icon: '💡' },
        { id: 'humor', label: 'Humor', icon: '😊' },
      ],
      suggestions: {
        familie: [
          '🏡 ᴢᴇɪᴛ ᴍɪᴛ ᴅᴇʀ ғᴀᴍɪʟɪᴇ ɪsᴛ ᴜɴʙᴇᴢᴀʜʟʙᴀʀ ❤️',
          '👨‍👩‍👧‍👦 ᴅɪᴇ ᴡɪᴄʜᴛɪɢsᴛᴇɴ ᴍᴇɴsᴄʜᴇɴ ᴀɴ ᴍᴇɪɴᴇʀ sᴇɪᴛᴇ ✨',
          '🌻 ᴋʟᴇɪɴᴇ ᴍᴏᴍᴇɴᴛᴇ, ɢʀᴏßᴇ ᴇʀɪɴɴᴇʀᴜɴɢᴇɴ 📸',
          '❤️ ғᴀᴍɪʟɪᴇ ɪsᴛ ᴡᴏ ʟᴇʙᴇɴ ʙᴇɢɪɴɴᴛ ᴜɴᴅ ʟɪᴇʙᴇ ɴɪᴇᴍᴀʟs ᴇɴᴅᴇᴛ 🏡',
          '🧸 ɢᴇᴍᴇɪɴsᴀᴍ ʟᴀᴄʜᴇɴ, ᴢᴜsᴀᴍᴍᴇɴʜᴀʟᴛᴇɴ, ɢᴇɴɪᴇßᴇɴ 🌷',
        ],
        reisen: [
          '🌍 ᴜɴᴛᴇʀᴡᴇɢs ɪɴ ᴅᴇʀ ᴡᴇʟᴛ • ɴᴇᴜᴇ ᴇɪɴᴅʀüᴄᴋᴇ sᴀᴍᴍᴇʟɴ ✈️',
          '🏖️ ᴜʀʟᴀᴜʙsɢʀüßᴇ ᴀᴜs ᴅᴇᴍ süᴅᴇɴ • sᴏɴɴᴇ, sᴛʀᴀɴᴅ & ᴍᴇᴇʀ 🌊',
          '🌲 ᴡᴀɴᴅᴇʀᴜɴɢ ᴅᴜʀᴄʜ ᴅɪᴇ ʙᴇʀɢᴇ • ɴᴀᴛᴜʀ ᴘᴜʀ 🏔️',
          '🗺️ ᴇɴᴛᴅᴇᴄᴋᴇ ᴅɪᴇ sᴄʜöɴʜᴇɪᴛ ᴠᴏʀ ᴅᴇʀ ᴇɪɢᴇɴᴇɴ ʜᴀᴜsᴛüʀ 🚴',
          '🏛️ sᴛäᴅᴛᴇᴛʀɪᴘ ᴍɪᴛ ɢᴇsᴄʜɪᴄʜᴛᴇ, ᴋᴜʟᴛᴜʀ & ɢᴜᴛᴇᴍ ᴇssᴇɴ 🍝',
        ],
        business: [
          '💼 ᴡɪʟʟᴋᴏᴍᴍᴇɴ ᴀᴜғ ᴜɴsᴇʀᴇʀ ᴏғғɪᴢɪᴇʟʟᴇɴ ғᴀᴄᴇʙᴏᴏᴋ-sᴇɪᴛᴇ 🤝',
          '📢 ɴᴇᴜᴇs ᴘʀᴏᴊᴇᴋᴛ ᴇʀғᴏʟɢʀᴇɪᴄʜ ᴀʙɢᴇsᴄʜʟᴏssᴇɴ! ᴅᴀɴᴋᴇ ᴀɴ ᴜɴsᴇʀ ᴛᴇᴀᴍ 🚀',
          '💡 ᴛɪᴘᴘ ᴅᴇʀ ᴡᴏᴄʜᴇ ғüʀ ᴜɴsᴇʀᴇ ᴋᴜɴᴅᴇɴ & ᴘᴀʀᴛɴᴇʀ 📊',
          '⭐ ᴋᴜɴᴅᴇɴᴢᴜғʀɪᴇᴅᴇɴʜᴇɪᴛ sᴛᴇʜᴛ ʙᴇɪ ᴜɴs ᴀɴ ᴇʀsᴛᴇʀ sᴛᴇʟʟᴇ 🏆',
          '📞 ᴡɪʀ sɪɴᴅ ғüʀ sɪᴇ ᴅᴀ: ᴍᴏ–ғʀ 𝟢𝟪:𝟢𝟢 – 𝟣𝟩:𝟢𝟢 ᴜʜʀ ✉️',
        ],
        feiertage: [
          '🎄 ᴡɪʀ ᴡüɴsᴄʜᴇɴ ᴇɪɴ ғʀᴏʜᴇs & ɢᴇsᴇɢɴᴇᴛᴇs ᴡᴇɪʜɴᴀᴄʜᴛsғᴇsᴛ 🎁',
          '🥂 ᴇɪɴ ɢᴇsᴜɴᴅᴇs, ᴇʀғᴏʟɢʀᴇɪᴄʜᴇs ɴᴇᴜᴇs ᴊᴀʜʀ 𝟤𝟢𝟤𝟧! 🎆',
          '🌷 ᴇʀʜᴏʟsᴀᴍᴇ ᴏsᴛᴇʀᴛᴀɢᴇ ɪᴍ ᴋʀᴇɪsᴇ ᴅᴇʀ ʟɪᴇʙsᴛᴇɴ 🐰',
          '☀️ sᴄʜöɴᴇɴ ᴍᴜᴛᴛᴇʀᴛᴀɢ ᴀɴ ᴀʟʟᴇ ᴡᴜɴᴅᴇʀʙᴀʀᴇɴ ᴍüᴛᴛᴇʀ 💐',
          '🎉 ᴇɪɴ ᴡᴜɴᴅᴇʀsᴄʜöɴᴇs, sᴏɴɴɪɢᴇs ᴡᴏᴄʜᴇɴᴇɴᴅᴇ ᴀʟʟᴇʀsᴇɪᴛs! ☕',
        ],
        motivation: [
          '💡 ᴊᴇᴅᴇʀ ᴛᴀɢ ʙʀɪɴɢᴛ ɴᴇᴜᴇ ᴄʜᴀɴᴄᴇɴ • ɴᴜᴛᴢᴇ sɪᴇ! 🌅',
          '🌱 ɢʀᴏßᴇ ᴅɪɴɢᴇ ʙᴇɢɪɴɴᴇɴ ᴏғᴛ ᴍɪᴛ ᴋʟᴇɪɴᴇɴ sᴄʜʀɪᴛᴛᴇɴ ✨',
          '🕊️ ᴅᴀɴᴋʙᴀʀᴋᴇɪᴛ ᴠᴇʀᴡᴀɴᴅᴇʟᴛ ᴅᴀs, ᴡᴀs ᴡɪʀ ʜᴀʙᴇɴ, ɪɴ ɢᴇɴᴜɢ 🌸',
          '💪 ʟᴀss ᴅɪᴄʜ ɴɪᴄʜᴛ ᴇɴᴛᴍᴜᴛɪɢᴇɴ — ᴅᴇʀ ᴡᴇɢ ɪsᴛ ᴅᴀs ᴢɪᴇʟ 🎯',
          '🌟 ɢɪʙ ᴊᴇᴅᴇᴍ ᴛᴀɢ ᴅɪᴇ ᴄʜᴀɴᴄᴇ, ᴅᴇʀ sᴄʜöɴsᴛᴇ ᴅᴇɪɴᴇs ʟᴇʙᴇɴs ᴢᴜ ᴡᴇʀᴅᴇɴ ✨',
        ],
        humor: [
          '😊 ʟäᴄʜᴇʟɴ ɪsᴛ ᴅɪᴇ sᴄʜöɴsᴛᴇ sᴘʀᴀᴄʜᴇ ᴅᴇʀ ᴡᴇʟᴛ ☕',
          '🍰 ᴍᴀɴ sᴏʟʟᴛᴇ ᴅᴀs ʟᴇʙᴇɴ ɢᴇɴɪᴇßᴇɴ — ᴡɪᴇ ᴇɪɴ sᴛüᴄᴋ ᴋᴜᴄʜᴇɴ 😋',
          '👓 ᴍᴀɴ ᴡɪʀᴅ ɴɪᴄʜᴛ äʟᴛᴇʀ, sᴏɴᴅᴇʀɴ ᴋʟᴀssɪsᴄʜᴇʀ & ᴇʀғᴀʜʀᴇɴᴇʀ 🎩',
          '😴 ᴋᴀғғᴇᴇ ᴜɴᴅ sᴏɴɴᴇɴsᴄʜᴇɪɴ: ᴍᴇʜʀ ʙʀᴀᴜᴄʜᴛ ᴍᴀɴ ʜᴇᴜᴛᴇ ɴɪᴄʜᴛ ☀️',
          '🤷‍♂️ ᴡᴇʀ ᴋᴇɪɴᴇ ɢᴇᴅᴜʟᴅ ʜᴀᴛ, ᴍᴜss ᴇʙᴇɴ ʟäᴄʜᴇʟɴ ᴜɴᴅ ᴡᴀʀᴛᴇɴ ⏳',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Gestalte deine Facebook Seiten-Titel, Beitrags-Headlines oder Gruppen-Namen mit dezenten Ornamenten:',
      inputLabel: 'Dein Seiten- oder Gruppenname:',
      placeholder: 'Seiten- oder Gruppenname',
      defaultValue: 'Facebook Seite',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere stimmige Emoji-Pakete für Facebook Posts, Gruppenankündigungen und Veranstaltungen:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'familie', label: 'Familie', icon: '🏡', emojis: ['🏡', '👨‍👩‍👧‍👦', '❤️', '🌻', '🧸', '✨'] },
        { id: 'reisen', label: 'Reisen', icon: '🌍', emojis: ['🌍', '✈️', '🏖️', '🌲', '🏔️', '🚴'] },
        { id: 'business', label: 'Business', icon: '💼', emojis: ['💼', '📢', '💡', '📊', '⭐', '📞'] },
        { id: 'feiertage', label: 'Feiertage', icon: '🎉', emojis: ['🎉', '🎄', '🥂', '🎆', '🌷', '💐'] },
        { id: 'natur', label: 'Natur', icon: '🌿', emojis: ['🌿', '☀️', '🌸', '🍃', '🌻', '🕊️'] },
      ],
    },
  },

  // 5. TWITTER / X
  'twitter-x': {
    ideasWidget: {
      title: 'X Bio-Ideen Generator',
      description: 'Prägnante, scharfe Bio-Zeilen und Profil-Texte im typischen X (Twitter) 160-Zeichen-Format:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Bio-Ideen sind Vorschläge — passe sie an deinen Account-Stil an',
      categories: [
        { id: 'tech', label: 'Tech', icon: '💻' },
        { id: 'news', label: 'News', icon: '📰' },
        { id: 'business', label: 'Business', icon: '📈' },
        { id: 'humor', label: 'Humor', icon: '⚡' },
        { id: 'kreativ', label: 'Kreativ', icon: '✍️' },
        { id: 'aktivismus', label: 'Aktivismus', icon: '🌍' },
      ],
      suggestions: {
        tech: [
          '💻 ᴀɪ, ᴄᴏᴅɪɴɢ & ᴛᴇᴄʜ ᴛʀᴇɴᴅs • ʙᴜɪʟᴅɪɴɢ ɪɴ ᴘᴜʙʟɪᴄ 🚀',
          '⚡ sᴏғᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀ @sᴛᴀʀᴛᴜᴘ | ᴛʏᴘᴇsᴄʀɪᴘᴛ & ʀᴜsᴛ 🦀',
          '🤖 ᴇxᴘʟᴏʀɪɴɢ ᴛʜᴇ ғᴜᴛᴜʀᴇ ᴏғ ʟʟᴍs & ʀᴏʙᴏᴛɪᴄs 💡',
          '🌐 ᴡᴇʙ𝟥, ᴄʟᴏᴜᴅ & ᴏᴘᴇɴ sᴏᴜʀᴄᴇ ᴇɴᴛʜᴜsɪᴀsᴛ 🛠️',
          '📱 sʜɪᴘᴘɪɴɢ ᴘʀᴏᴅᴜᴄᴛs ᴛʜᴀᴛ sᴏʟᴠᴇ ʀᴇᴀʟ ᴘʀᴏʙʟᴇᴍs 🎯',
        ],
        news: [
          '📰 ᴀᴋᴛᴜᴇʟʟᴇ ɴᴇᴡs, ᴀɴᴀʟʏsᴇɴ & ʜɪɴᴛᴇʀɢʀüɴᴅᴇ 🔍',
          '🎙️ ᴊᴏᴜʀɴᴀʟɪsᴛ & ᴋᴏᴍᴍᴇɴᴛᴀᴛᴏʀ | ᴘᴏʟɪᴛɪᴋ, ᴡɪʀᴛsᴄʜᴀғᴛ, ᴛᴇᴄʜ 📊',
          '⚡ ʙʀᴇᴀᴋɪɴɢ ɴᴇᴡs & ғᴀᴄʜʟɪᴄʜᴇ ᴇɪɴᴏʀᴅɴᴜɴɢ ɪɴ 𝟤𝟪𝟢 ᴢᴇɪᴄʜᴇɴ 📢',
          '📡 ᴍᴇᴅɪᴇɴʙᴇᴏʙᴀᴄʜᴛᴇʀ | ᴍᴇɪɴᴜɴɢᴇɴ sɪɴᴅ ᴍᴇɪɴᴇ ᴇɪɢᴇɴᴇɴ ✍️',
          '🔍 ғᴀᴋᴛᴇɴ, ᴅᴀᴛᴇɴ & ᴋʀɪᴛɪsᴄʜᴇ ᴘᴇʀsᴘᴇᴋᴛɪᴠᴇɴ 💡',
        ],
        business: [
          '📈 ᴠᴄ, sᴛᴀʀᴛᴜᴘs & ᴍᴀʀᴋᴇᴛ ɪɴsɪɢʜᴛs 💼',
          '🚀 ғᴏᴜɴᴅᴇʀ @ʙʀᴀɴᴅ • 𝟢 ᴛᴏ 𝟣 ᴊᴏᴜʀɴᴇʏ 📊',
          '💡 ᴡöᴄʜᴇɴᴛʟɪᴄʜᴇ ᴛʜʀᴇᴀᴅs ᴢᴜ sᴄᴀʟɪɴɢ & ᴍᴀʀᴋᴇᴛɪɴɢ 🧵',
          '💰 ɪɴᴠᴇsᴛɪɴɢ, ᴇ-ᴄᴏᴍᴍᴇʀᴄᴇ & ʙᴜsɪɴᴇss ᴍᴏᴅᴇʟs 🎯',
          '🧠 ᴡᴏʀᴋ sᴍᴀʀᴛᴇʀ, ɴᴏᴛ ʜᴀʀᴅᴇʀ • ᴘʀᴏᴅᴜᴄᴛɪᴠɪᴛʏ ʜᴀᴄᴋs ⚡',
        ],
        humor: [
          '⚡ ʜɪᴇʀ ғüʀ ᴅɪᴇ ᴍᴇᴍᴇs ᴜɴᴅ ᴛᴏxɪsᴄʜᴇ ᴛᴀᴋᴇs 🍿',
          '☕ 𝟫𝟢% ᴋᴀғғᴇᴇ • 𝟣𝟢% ᴜɴɢᴇғɪʟᴛᴇʀᴛᴇ ɢᴇᴅᴀɴᴋᴇɴ 🤡',
          '🤷‍♂️ ᴍᴇɪɴ ᴋᴏᴘғ ᴜᴍ 𝟢𝟥:𝟢𝟢 ᴜʜʀ ɴᴀᴄʜᴛs: ᴇɪɴ ᴛʜʀᴇᴀᴅ 🧵',
          '🗑️ ᴘʀᴏғᴇssɪᴏɴᴇʟʟᴇʀ ᴅᴏᴏᴍsᴄʀᴏʟʟᴇʀ sᴇɪᴛ 𝟤𝟢𝟣𝟧 📱',
          '💀 ɪᴄʜ ᴛᴡᴇᴇᴛᴇ, ᴀʟsᴏ ʙɪɴ ɪᴄʜ 🤷',
        ],
        kreativ: [
          '✍️ ᴀᴜᴛᴏʀ & ɢᴇᴅᴀɴᴋᴇɴsᴀᴍᴍʟᴇʀ | ᴡᴏʀᴛᴇ ᴍɪᴛ ᴡɪʀᴋᴜɴɢ ✨',
          '🎨 ᴅᴇsɪɢɴᴇʀ, ᴛʏᴘᴏɢʀᴀᴘʜᴇʀ & ᴄʀᴇᴀᴛɪᴠᴇ ᴅɪʀᴇᴄᴛᴏʀ 🖌️',
          '🎬 ᴠɪsᴜᴀʟ ᴀʀᴛ & ᴄɪɴᴇᴍᴀᴛɪᴄ sᴛᴏʀʏᴛᴇʟʟɪɴɢ 🎞️',
          '💡 ɪᴅᴇᴇɴ ғüʀ ᴅɪᴇ ᴡᴇʟᴛ ᴠᴏɴ ᴍᴏʀɢᴇɴ 🌌',
          '📜 ᴛäɢʟɪᴄʜᴇ ᴢɪᴛᴀᴛᴇ, ᴛʜʀᴇᴀᴅs & ɪɴsᴘɪʀᴀᴛɪᴏɴ 🌟',
        ],
        aktivismus: [
          '🌍 ᴋʟɪᴍᴀɢᴇʀᴇᴄʜᴛɪɢᴋᴇɪᴛ & ɴᴀᴄʜʜᴀʟᴛɪɢᴋᴇɪᴛ 🌱',
          '📢 sᴛɪᴍᴍᴇ ғüʀ sᴏᴢɪᴀʟᴇ ᴠᴇʀᴀɴᴛᴡᴏʀᴛᴜɴɢ & ᴅɪᴠᴇʀsɪᴛäᴛ ✊',
          '💡 ᴡɪssᴇɴ sᴄʜᴀғғᴛ ᴠᴇʀäɴᴅᴇʀᴜɴɢ • ғᴀᴋᴛᴇɴʙᴀsɪᴇʀᴛ 📚',
          '🕊️ ᴍᴇɴsᴄʜᴇɴʀᴇᴄʜᴛᴇ • ᴢɪᴠɪʟᴄᴏᴜʀᴀɢᴇ • ᴢᴜᴋᴜɴғᴛ 🤍',
          '🌱 ɢᴇᴍᴇɪɴsᴀᴍ ғüʀ ᴇɪɴᴇ ʟᴇʙᴇɴsᴡᴇʀᴛᴇ ᴢᴜᴋᴜɴғᴛ ✨',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Gestalte deinen X Anzeigenamen (Display Name) mit kompakten, zeichenschonenden Symbolen:',
      inputLabel: 'Dein X Anzeigename:',
      placeholder: 'Dein Anzeigename',
      defaultValue: 'X Anzeigename',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere thematische Emojis für deine Tweets, Threads oder X-Bio:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'tech', label: 'Tech', icon: '💻', emojis: ['💻', '⚡', '🤖', '🦀', '🛠️', '🚀'] },
        { id: 'news', label: 'News', icon: '📰', emojis: ['📰', '🔍', '🎙️', '📊', '📢', '📡'] },
        { id: 'business', label: 'Business', icon: '📈', emojis: ['📈', '💼', '🚀', '💡', '💰', '🎯'] },
        { id: 'humor', label: 'Humor', icon: '⚡', emojis: ['🍿', '🤡', '🤷‍♂️', '📱', '💀', '☕'] },
        { id: 'aktivismus', label: 'Aktivismus', icon: '🌍', emojis: ['🌍', '🌱', '✊', '📚', '🕊️', '💡'] },
      ],
    },
  },

  // 6. TELEGRAM
  telegram: {
    ideasWidget: {
      title: 'Telegram Kanal- & Gruppennamen-Ideen Generator',
      description: 'Kopiere formatierte Kanal-Titel, Gruppen-Namen und Info-Texte für Telegram:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Kanal- & Gruppennamen sind Vorschläge — passe sie an dein Thema an',
      categories: [
        { id: 'community', label: 'Community', icon: '👥' },
        { id: 'news', label: 'News', icon: '📡' },
        { id: 'krypto', label: 'Krypto / Tech', icon: '⚡' },
        { id: 'bildung', label: 'Bildung', icon: '📚' },
        { id: 'business', label: 'Business', icon: '💼' },
        { id: 'chat-gruppen', label: 'Chat-Gruppen', icon: '💬' },
      ],
      suggestions: {
        community: [
          '👑 ᴠᴏɪᴅ ᴄᴏᴍᴍᴜɴɪᴛʏ // ᴏғғɪᴄɪᴀʟ ʜᴜʙ 🛡️',
          '✨ ᴅᴇᴜᴛsᴄʜᴇ ɢᴀᴍɪɴɢ & ᴛᴇᴄʜ ᴄᴏᴍᴍᴜɴɪᴛʏ 🎮',
          '🌟 ᴇxᴋʟᴜsɪᴠᴇʀ ᴍᴇᴍʙᴇʀ-ᴄʜᴀᴛ • ɢᴏᴏᴅ ᴠɪʙᴇs ☕',
          '🔥 ᴅɪɢɪᴛᴀʟ ɴᴏᴍᴀᴅs ɢᴇʀᴍᴀɴʏ 🌍',
          '💎 ᴠɪᴘ ɪɴsɪɢʜᴛs & ᴇxᴄʟᴜsɪᴠᴇ ᴜᴘᴅᴀᴛᴇs 🚀',
        ],
        news: [
          '📡 ʙʀᴇᴀᴋɪɴɢ ɴᴇᴡs ᴅᴇᴜᴛsᴄʜʟᴀɴᴅ // 𝟤𝟦/𝟩 🚨',
          '📊 ᴡɪʀᴛsᴄʜᴀғᴛ, ʙöʀsᴇ & ᴛᴇᴄʜ-ᴛɪᴄᴋᴇʀ 📈',
          '🔍 ᴜɴᴀʙʜäɴɢɪɢᴇ ɴᴇᴡs & ᴇɪʟᴍᴇʟᴅᴜɴɢᴇɴ 📰',
          '🌐 ᴡᴏʀʟᴅ ɴᴇᴡs ɪɴ 𝟨𝟢 sᴇᴋᴜɴᴅᴇɴ ⏱️',
          '⚡ ᴛäɢʟɪᴄʜᴇʀ ɴᴇᴡsʟᴇᴛᴛᴇʀ-ᴛɪᴄᴋᴇʀ 📩',
        ],
        krypto: [
          '⚡ ʙɪᴛᴄᴏɪɴ & ᴄʀʏᴘᴛᴏ ɢᴇʀᴍᴀɴʏ // ᴀʟᴇʀᴛs 🚀',
          '📈 ᴅᴇғɪ, ᴡᴇʙ𝟥 & ʙʟᴏᴄᴋᴄʜᴀɪɴ ɪɴsɪɢʜᴛs 💎',
          '🐋 ᴡʜᴀʟᴇ ᴀʟᴇʀᴛs & ᴍᴀʀᴋᴇᴛ ᴀɴᴀʟʏsɪs 📊',
          '🧠 ᴋʀʏᴘᴛᴏ-ᴡɪssᴇɴ ғüʀ ᴇɪɴsᴛᴇɪɢᴇʀ 💡',
          '🤖 ᴀɪ-ᴛᴏᴏʟs & ᴛᴇᴄʜ-ɪɴɴᴏᴠᴀᴛɪᴏɴ ᴋᴀɴᴀʟ 💻',
        ],
        bildung: [
          '📚 𝟣 ᴍɪɴᴜᴛᴇ ᴡɪssᴇɴ • ᴛäɢʟɪᴄʜ sᴄʜʟᴀᴜᴇʀ 🧠',
          '🎓 ʟᴇʀɴ-ᴛɪᴘᴘs, sᴛᴜᴅɪᴜᴍ & ᴋᴀʀʀɪᴇʀᴇ 💡',
          '🔬 ғᴀsᴢɪɴɪᴇʀᴇɴᴅᴇ ᴡɪssᴇɴsᴄʜᴀғᴛs-ғᴀᴋᴛᴇɴ ✨',
          '📖 ʙᴜᴄʜᴢᴜsᴀᴍᴍᴇɴғᴀssᴜɴɢᴇɴ & ᴋᴇʏ ʟᴇᴀʀɴɪɴɢs ✍️',
          '🎯 ᴘʀᴏᴅᴜᴋᴛɪᴠɪᴛäᴛ & sᴇʟʙsᴛᴍᴀɴᴀɢᴇᴍᴇɴᴛ ⚡',
        ],
        business: [
          '💼 ᴇ-ᴄᴏᴍᴍᴇʀᴄᴇ & sᴛᴀʀᴛᴜᴘ ʜᴜʙ ᴅᴀᴄʜ 🚀',
          '📈 ᴍᴀʀᴋᴇᴛɪɴɢ, sᴀʟᴇs & ʟᴇᴀᴅɢᴇɴ ᴛɪᴘᴘs 📊',
          '💰 ɴᴇʙᴇɴᴇɪɴᴋᴏᴍᴍᴇɴ & ʙᴜsɪɴᴇss ɪᴅᴇᴇɴ 🎯',
          '🤝 ʙ𝟤ʙ ɴᴇᴛᴢᴡᴇʀᴋ & ᴋᴏᴏᴘᴇʀᴀᴛɪᴏɴᴇɴ 💼',
          '🚀 ᴇxᴋʟᴜsɪᴠᴇ ᴍᴀsᴛᴇʀᴍɪɴᴅ ɢʀᴜᴘᴘᴇ 💎',
        ],
        'chat-gruppen': [
          '💬 ᴛᴀʟᴋ & ᴄʜɪʟʟ // ᴅᴇᴜᴛsᴄʜᴇ ɢʀᴜᴘᴘᴇ ☕',
          '🎮 ɢᴀᴍᴇʀ ʟᴏʙʙʏ • ᴍᴀᴛᴄʜᴍᴀᴋɪɴɢ & sǫᴜᴀᴅs 🕹️',
          '🎨 ᴋʀᴇᴀᴛɪᴠ-ᴀᴜsᴛᴀᴜsᴄʜ ғüʀ ᴅᴇsɪɢɴᴇʀ ✨',
          '🍕 ғᴇɪᴇʀᴀʙᴇɴᴅ-ᴛᴀʟᴋ & ɢᴏᴏᴅ ᴠɪʙᴇs 🍻',
          '📱 sᴍᴀʀᴛᴘʜᴏɴᴇ, ᴀᴘᴘs & ᴛᴇᴄʜ ᴄʜᴀᴛ 💻',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Gestalte deine Telegram Kanal-Titel und Gruppen-Namen mit auffälligen Klammern und Symbolen:',
      inputLabel: 'Dein Telegram Kanal- oder Gruppenname:',
      placeholder: 'Kanalname oder Gruppenname',
      defaultValue: 'Telegram Kanal',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Kopiere kuratierte Emoji-Pakete für Telegram-Kanäle, Broadcasts und Gruppenbeschreibungen:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'community', label: 'Community', icon: '👥', emojis: ['👑', '🛡️', '✨', '🌟', '🔥', '💎'] },
        { id: 'news', label: 'News', icon: '📡', emojis: ['📡', '🚨', '📊', '📰', '🔍', '⚡'] },
        { id: 'tech', label: 'Tech', icon: '⚡', emojis: ['⚡', '💎', '📈', '🐋', '🧠', '🤖'] },
        { id: 'bildung', label: 'Bildung', icon: '📚', emojis: ['📚', '🧠', '💡', '🔬', '📖', '🎯'] },
        { id: 'business', label: 'Business', icon: '💼', emojis: ['💼', '🚀', '📊', '💰', '🤝', '📈'] },
      ],
    },
  },

  // 7. TIKTOK
  tiktok: {
    ideasWidget: {
      title: 'TikTok Bio-Ideen Generator',
      description: 'Wähle deine Nische und kopiere fertige, für das 80-Zeichen-Limit optimierte Bio-Vorlagen direkt in dein TikTok-Profil:',
      badgeText: '1-Klick Kopieren',
      disclaimer: '* Bio-Ideen sind Vorschläge — passe sie an deinen eigenen Stil an',
      categories: [
        { id: 'reisen', label: 'Reisen', icon: '✈️' },
        { id: 'gaming', label: 'Gaming', icon: '🎮' },
        { id: 'bildung', label: 'Bildung', icon: '🧠' },
        { id: 'sport', label: 'Sport', icon: '🏋️' },
        { id: 'fotografie', label: 'Fotografie', icon: '📸' },
        { id: 'business', label: 'Business', icon: '💼' },
      ],
      suggestions: {
        reisen: [
          '✈️ ᴏɴ ᴀ ᴍɪssɪᴏɴ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴡᴏʀʟᴅ 🌍 | ɴᴇxᴛ: ɪᴛᴀʟʏ 🇮🇹',
          '🎒 ᴍɪᴛ ᴅᴇᴍ ʀᴜᴄᴋsᴀᴄᴋ ᴜᴍ ᴅɪᴇ ᴡᴇʟᴛ • ᴛʀᴀᴠᴇʟ ᴠʟᴏɢs 📍',
          '🌴 ᴠɪᴛᴀᴍɪɴ sᴇᴀ & ғᴇʀɴᴡᴇʜ | ᴛʀᴀᴠᴇʟ ᴛɪᴘᴘs ✈️',
          '🗺️ 𝟤𝟢+ ʟäɴᴅᴇʀ • ɴᴜʀ ʜᴀɴᴅɢᴇᴘäᴄᴋ ᴜɴᴅ ɢᴜᴛᴇ ʟᴀᴜɴᴇ 🌊',
          '🌅 sᴀᴍᴍʟᴇ ᴍᴏᴍᴇɴᴛᴇ, ɴɪᴄʜᴛ ᴅɪɴɢᴇ | ʀᴇɪsᴇ-ᴠɪʙᴇs ✨',
        ],
        gaming: [
          '🎮 ɢᴀᴍɪɴɢ ʜɪɢʜʟɪɢʜᴛs & ᴄʟɪᴘs | ᴅᴀɪʟʏ ᴜᴘʟᴏᴀᴅs 🕹️',
          '⚡ ɢʀɪɴᴅ ᴛᴏ ᴜɴʀᴇᴀʟ 🏆 | sᴇᴛᴜᴘ & ᴛɪᴘᴘs 🎧',
          '👾 ᴘᴄ & ᴄᴏɴsᴏʟᴇ ɢᴀᴍᴇʀ | ᴄʟɪᴘ ᴅᴇs ᴛᴀɢᴇs 🔥',
          '🎯 ɴᴏ sᴄᴏᴘᴇ, ᴊᴜsᴛ ʜᴏᴘᴇ 💥 | ɢᴀᴍɪɴɢ ᴄᴏᴍᴍᴜɴɪᴛʏ 🎮',
          '🕹️ ʟɪᴠᴇsᴛʀᴇᴀᴍ-ᴍᴏᴍᴇɴᴛᴇ & ғᴜɴɴʏ ғᴀɪʟs 🚀',
        ],
        bildung: [
          '🧠 𝟣 ᴍɪɴᴜᴛᴇ = 𝟣 ɴᴇᴜᴇʀ ғᴀᴋᴛ | ᴡɪssᴇɴ ᴛäɢʟɪᴄʜ 💡',
          '📚 ʟᴇʀɴ-ʜᴀᴄᴋs ғüʀ sᴄʜᴜʟᴇ & sᴛᴜᴅɪᴜᴍ 🎓',
          '🔬 ᴡɪssᴇɴsᴄʜᴀғᴛ ᴇɪɴғᴀᴄʜ ᴇʀᴋʟäʀᴛ | ғᴀsᴢɪɴɪᴇʀᴇɴᴅᴇ ғᴀᴋᴛᴇɴ ✨',
          '💡 sᴄʜʟᴀᴜᴇʀ ɪɴ 𝟨𝟢 sᴇᴋᴜɴᴅᴇɴ • ᴛäɢʟɪᴄʜᴇ ᴛɪᴘᴘs 📖',
          '✍️ ᴘʀᴏᴅᴜᴋᴛɪᴠɪᴛäᴛ & ʟᴇʀɴᴍᴇᴛʜᴏᴅᴇɴ 🎯',
        ],
        sport: [
          '🏋️‍♂️ ɢʏᴍ ᴍᴏᴛɪᴠᴀᴛɪᴏɴ & ᴡᴏʀᴋᴏᴜᴛ-ᴛɪᴘᴘs ⚡',
          '🏃‍♀️ 𝟧 ᴋᴍ ʙɪs ᴍᴀʀᴀᴛʜᴏɴ | ʀᴜɴɴɪɴɢ & ғɪᴛɴᴇss 👟',
          '💪 ᴛʀᴀɪɴ ʜᴀʀᴅ, sᴛᴀʏ ʜᴜᴍʙʟᴇ | ᴛäɢʟɪᴄʜᴇs ᴡᴏʀᴋᴏᴜᴛ 🔥',
          '🥗 ɢᴇsᴜɴᴅᴇ ᴇʀɴäʜʀᴜɴɢ & ғɪᴛɴᴇss-ʜᴀᴄᴋs 🥑',
          '🥇 𝟣% ʙᴇssᴇʀ ᴊᴇᴅᴇɴ ᴛᴀɢ | ʏᴏᴜʀ ᴅᴀɪʟʏ ᴘᴜsʜ 🥊',
        ],
        fotografie: [
          '📸 ᴅɪᴇ ᴡᴇʟᴛ ᴅᴜʀᴄʜ ᴍᴇɪɴᴇ ʟɪɴsᴇ | sᴏɴʏ ᴀ𝟩ɪᴠ 🎞️',
          '🌇 ᴘᴏʀᴛʀᴀɪᴛ & sᴛʀᴇᴇᴛ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ | ᴛɪᴘᴘs 📷',
          '✨ ᴠɪᴅᴇᴏɢʀᴀᴘʜʏ & ᴄᴏʟᴏʀ ɢʀᴀᴅɪɴɢ ᴛʀɪᴄᴋs 🎬',
          '🎞️ 𝟥𝟧ᴍᴍ ᴀᴇsᴛʜᴇᴛɪᴄ & ʟɪɢʜᴛʀᴏᴏᴍ ᴘʀᴇsᴇᴛs 🌅',
          '📱 sᴍᴀʀᴛᴘʜᴏɴᴇ-ғᴏᴛᴏs ᴡɪᴇ ᴇɪɴ ᴘʀᴏғɪ ᴍᴀᴄʜᴇɴ 💡',
        ],
        business: [
          '💼 ᴇ-ᴄᴏᴍᴍᴇʀᴄᴇ & sᴛᴀʀᴛᴜᴘ ᴛɪᴘᴘs | 𝟢 ᴀᴜғ 𝟣𝟢ᴋ 🚀',
          '📈 ғɪɴᴀɴᴢᴇɴ & ᴍɪɴᴅsᴇᴛ ғüʀ ᴊᴜɴɢᴇ ɢʀüɴᴅᴇʀ 💡',
          '💻 ʜᴏᴍᴇ-ᴏғғɪᴄᴇ & ᴏɴʟɪɴᴇ-ʙᴜsɪɴᴇss ʜᴀᴄᴋs 📊',
          '💰 sᴄʜʀɪᴛᴛ ғüʀ sᴄʜʀɪᴛᴛ ᴢᴜᴍ ɴᴇʙᴇɴᴇɪɴᴋᴏᴍᴍᴇɴ 🎯',
          '🚀 ᴍᴀʀᴋᴇᴛɪɴɢ & ᴄᴏɴᴛᴇɴᴛ-sᴛʀᴀᴛᴇɢɪᴇ 📱',
        ],
      },
    },
    symbolWidget: {
      title: 'Symbol-Kombinationen Generator',
      description: 'Tippe deinen Namen oder ein Wort ein, um ihn live mit viralen TikTok-Rahmen, Klammern und Symbolen zu umrahmen:',
      inputLabel: 'Dein Wort oder Name:',
      placeholder: 'TikTok Bio',
      defaultValue: 'TikTok Bio',
      linkUrl: '/symbole/rahmen',
      linkLabel: 'Alle Rahmen & Symbole',
    },
    emojiWidget: {
      title: 'Themen-Emoji-Pakete',
      description: 'Perfekt abgestimmte Emoji-Sets für jede TikTok-Kategorie. Kopiere die ganze Reihe mit 1 Klick für deine Bio oder Captions:',
      badgeText: '1-Klick Komplett-Kopie',
      packages: [
        { id: 'reisen', label: 'Reisen', icon: '✈️', emojis: ['✈️', '🌴', '🎒', '🗺️', '🏖️', '🌅'] },
        { id: 'gaming', label: 'Gaming', icon: '🎮', emojis: ['🎮', '🕹️', '🎧', '👾', '⚡', '🏆'] },
        { id: 'lernen', label: 'Lernen', icon: '📚', emojis: ['📚', '🧠', '💡', '✍️', '🎓', '📖'] },
        { id: 'fitness', label: 'Fitness', icon: '🏋️', emojis: ['🏋️‍♂️', '💪', '🏃‍♀️', '🥗', '🥇', '🥑'] },
        { id: 'fotografie', label: 'Fotografie', icon: '📸', emojis: ['📸', '📷', '🎞️', '🌇', '🎬', '✨'] },
        { id: 'business', label: 'Business', icon: '💼', emojis: ['💼', '📈', '💻', '💰', '📊', '🚀'] },
        { id: 'liebe', label: 'Liebe', icon: '💖', emojis: ['💖', '🌹', '💌', '🧸', '✨', '🥰'] },
        { id: 'musik', label: 'Musik', icon: '🎵', emojis: ['🎵', '🎧', '🎸', '🎹', '🎤', '🎶'] },
      ],
    },
  },
};
