type JsonLdProps = {
  data: Record<string, unknown>;
};

// Escapa "<" para que nenhum texto do payload feche a tag <script> (recomendação da doc do Next).
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
