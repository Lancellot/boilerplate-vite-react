import type FeatureSection from "../../../models/FeatureSection"

interface CardProps {
    cardFeature: FeatureSection
};

export default function CardFeature ({ cardFeature }: CardProps) {
  return (
    <article
      onClick={cardFeature.onClick}
      role={cardFeature.onClick ? 'button' : undefined}
      className={`
        relative cursor-pointer rounded-2xl p-5 
        bg-white/5 backdrop-blur 
        border border-white/10 
        hover:border-white/20 hover:scale-[1.02] 
        transition-all duration-300
      `}
    >

      <div className="flex items-center justify-between mb-3">
        <span className="text-xl">{cardFeature.emoji}</span>

        {cardFeature.tag && (
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
            {cardFeature.tag}
          </span>
        )}
      </div>


      <h3 className="text-lg font-semibold text-white mb-2">
        {cardFeature.title}
      </h3>


      <p className="text-sm text-white/70 leading-relaxed">
        {cardFeature.desc}
      </p>


      <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-white transition">
        →
      </div>
    </article>
  )
}