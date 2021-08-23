using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MapProfiles : Profile
    {
        public MapProfiles()
        {
            CreateMap<Activities, Activities>();
        }
    }
}