export type CardsProps = {
  cards: [
    {
      title?: string;
      price?: number;
      currency_id?: string;
      thumbnail?: string;
      id?: string;
    },
  ];
};

export default function CardsProduct({ cards }: CardsProps) {
  if (!cards) {
    return <p>Nenhum produto foi encontrado</p>;
  }
  return (
    <div>
      {cards.map((card) => (
        <div key={ card.id } data-testid="product">
          <h3>{card.title}</h3>
          <img src={ card.thumbnail } alt={ card.title } />
          <p>{`${card.currency_id}: R$ ${card.price}`}</p>
        </div>
      ))}
    </div>
  );
}
