import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";


export const LabelPicker = () => {
  const { data: labels, isLoading } = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
  })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        Espere ...
      </div>
    )
  }



  return (
    <div className="flex flex-wrap justify-center gap-2">
      {
        labels?.map(label => (
          <span
            key={label.id}
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))
      }
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </div>
  );
};
